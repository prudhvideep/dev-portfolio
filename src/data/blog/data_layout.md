---
title: "Layout Matters"
pubDatetime: 2026-08-24T00:18:48Z
description: "Data layout can affect cache locality"
tags: [concurrency, sockets, kqueue]
featured: false
---

Programming languages abstract out the spatial topology of memory by modelling it as a flat array. This model attaches a similar cost to all memory accesses. In reality, memory layout influences the speed at which CPU can fetch the data required to carry out a computation.

DRAM is connected to the CPU by a memory bus. In addition, CPUs have a bunch of extremely fast but tiny caches `L1/L2/L3` etched at close proximity. Accessing data from the caches is orders of magnitude faster than accessing data from main memory.

<img src="/images/memory-latency-light.svg" alt="Log-scale chart of memory access latency per tier: registers 0.3 ns, L1 1 ns, L2 4 ns, L3 12 ns, main memory 80 ns, NVMe SSD 50 µs, SATA SSD 150 µs, hard disk 8 ms." class="theme-light" />
<img src="/images/memory-latency-dark.svg" alt="Log-scale chart of memory access latency per tier: registers 0.3 ns, L1 1 ns, L2 4 ns, L3 12 ns, main memory 80 ns, NVMe SSD 50 µs, SATA SSD 150 µs, hard disk 8 ms." class="theme-dark" />

To perform computations efficiently, we need to think about how our programs access data. We should tune our access patterns to be cache friendly. In the post, I will particularly discuss how data layout can affect the cache locality.

## A tale of two structs

We have two structs `MissileGood` and `MissileBad` with the same fields albeit in a different order. In my game, at the end of the loop, I need to check an array of missiles to identify disabled missiles and set the visible flag to false.

```c file="MissileGood.c"
struct MissileGood {
    bool is_visible, is_disabled;

    float x, y, z;
    float velocity_x, velocity_y, velocity_z;
    float damage, explosion_radius, fuel, lifetime;
    float launch_angle, homing_strength, turn_rate, max_speed;
    float acceleration, distance_traveled, arming_time, explosion_delay;
    float smoke_duration, trail_length, gravity, drag;

    double seeker_temperature, guidance_error, signal_strength, flight_time;
};
```

```c file="MissileBad.c"
struct MissileBad {
    bool is_visible;

    float x, y, z;
    float velocity_x, velocity_y, velocity_z;
    float damage, explosion_radius, fuel, lifetime;
    float launch_angle, homing_strength, turn_rate, max_speed;
    float acceleration, distance_traveled, arming_time, explosion_delay;
    float smoke_duration, trail_length, gravity, drag;

    double seeker_temperature, guidance_error, signal_strength, flight_time;

    bool is_disabled;
};
```

### Benchmark

I have built a simple benchmark to update `is_visible` flag conditioned on the `is_disabled` for an array of structs. I ran the same code for both structs. I used `kperf.h` to read the CPU counters and get the measure of cache misses (Made me realise that I love `perf`). I have also randomized the access to disable the hardware prefetcher; discussing this is out of scope.

<img src="/images/missile-bench-light.svg" alt="Benchmark table comparing MissileGood (128 B) and MissileBad (136 B). MissileBad runs 16.66 ms vs 13.76 ms (1.21×) and burns 76.4M vs 62.0M cycles (1.23×) despite running only 1.02× the instructions, because it suffers 17.72M vs 6.39M L1D load misses (2.78×) and 6.46M vs 2.56M store misses (2.52×). IPC drops from 0.26 to 0.21." class="theme-light" />
<img src="/images/missile-bench-dark.svg" alt="Benchmark table comparing MissileGood (128 B) and MissileBad (136 B). MissileBad runs 16.66 ms vs 13.76 ms (1.21×) and burns 76.4M vs 62.0M cycles (1.23×) despite running only 1.02× the instructions, because it suffers 17.72M vs 6.39M L1D load misses (2.78×) and 6.46M vs 2.56M store misses (2.52×). IPC drops from 0.26 to 0.21." class="theme-dark" />

I ran the benchmark on Apple M4 with `128 byte` cache line. The good struct `(128 bytes)` fits a cache line whereas the bad one spans two cache lines `(136 bytes)`. The size of the data in the bench is not too big, so there is only a marginal wall clock improvement, but if you see the cache misses, the bad one has nearly double the cache misses compared to the good struct.

<img src="/images/missile-cacheline-light.svg" alt="Two 128-byte cache lines drawn as a track. MissileGood (128 bytes) fills exactly one cache line. MissileBad (136 bytes) fills the first line and spills 8 bytes past the boundary into a second cache line, so reading one element touches two cache lines instead of one." class="theme-light" />
<img src="/images/missile-cacheline-dark.svg" alt="Two 128-byte cache lines drawn as a track. MissileGood (128 bytes) fills exactly one cache line. MissileBad (136 bytes) fills the first line and spills 8 bytes past the boundary into a second cache line, so reading one element touches two cache lines instead of one." class="theme-dark" />

If you are using `clang` you can use the flag `-Xclang -fdump-record-layouts` to see the struct paddings and field offsets. Solely relying on compiler specific flags or extensions can affect code portability; it is essential to study the language ABI and have some general awareness of how data is laid out in memory to write performant cache friendly code.

## Towards SOA

Instead of trying to fit the data in a struct and access it in an array, where we cannot avoid paddings in the struct when we have heterogeneous types (some ISAs mandate aligned access), we can have an array for each field of the struct; this way we can avoid padding between the elements. This paradigm is called structure of arrays `(SOA)` and deserves a standalone post.
