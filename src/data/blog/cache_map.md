---
title: "Dense Map"
pubDatetime: 2026-08-24T00:18:48Z
description: "A simple hashmap that stores all the keys and values in a single allocation."
tags: [dod, performance, hashmaps]
featured: true
draft: true
---

Most of the modern CPUs have a sophisticated memory hierarchy with each class of memory having varying access speeds. The closest class of memory to the CPU, typically registers have an access latency in the order of `ns`, compared to `µs` for farther tiers of memory like an ssd. 

<img src="/images/memory-latency-table-light.svg" alt="Memory hierarchy access latency from CPU registers to network." class="theme-light" />
<img src="/images/memory-latency-table-dark.svg" alt="Memory hierarchy access latency from CPU registers to network." class="theme-dark" />

By exploiting memory hierarchy, data structures with good spatial layout can yield better performance in some cases than the structures designed for optimal asymptotic complexity. Rust's standard library has a pretty good `HashMap` implementation, but reaching out to use it always involves heap allocations and pointer chasing. For simple use cases like holding frequency counts in a hot loop, a map with good cache locality may perform better. Well, this is my hypothesis; in this post, I will try to justify this claim.

## A bytes journey

Before jumping to the design of the dense map, I want to explore how a byte flows across various layers of memory and reaches the processor, along with some of the techniques modern CPUs employ to improve instruction throughput. This may look unrelated, but understanding this process can build up an intuition to look for performance bottlenecks.