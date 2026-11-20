---
title: "Anatomy of an event loop"
pubDatetime: 2026-11-16T08:55:53Z
description: "Building an event loop on kqueue in Rust."
tags: [kqueue,async,rust]
featured: true
---

I always wondered how Node.js handled many concurrent connections with a single thread. Prying through reams of its code, I came across `libuv`, a cross-platform event loop implementation that makes all of this possible. In this post, I want to understand what problems an event loop solves and how it works by building one on top of `kqueue`. The API for the event loop closely mirrors that of the `mio` crate. The following discussion assumes that the operating system is `macOS/BSD` unless specified otherwise. 

### The Problem

To appreciate how an event loop makes a web server performant using only a single thread, let us try to build a simple single-threaded TCP echo server. A TCP listener is bound to the loopback address on port `6969`. The listener accepts a connection and echoes back the received message while the connection is alive. This would serve us well as long as we communicate with a single client at a time. This implementation does not scale if we want to communicate with multiple clients at the same time. Let's examine why.

```rust
fn main() -> io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:6969")?;
    let mut buf: [u8; 1024] = [0; 1024];

    loop {
        let (mut stream, addr) = match listener.accept() {
            Ok(conn) => conn,
            Err(e) => {
                eprintln!("accept error {e}");
                continue;
            },
        };
        println!("received conn from addr {addr:?}");

        loop {
            match stream.read(&mut buf) {
                Ok(0) => {
                    println!("Disconnected!!");
                    break;
                },
                Ok(n) => {
                    println!("Received : {:?}", String::from_utf8_lossy(&buf[..n]));
                    // echo the same bytes back, `write_all` blocks until
                    // everything is copied into the socket's send buffer
                    if let Err(e) = stream.write_all(&buf[..n]) {
                        eprintln!("write error {e}");
                        break;
                    }
                },
                Err(e) => {
                    eprintln!("read error {e}");
                    break;
                },
            }
        }
    }
}
```

`accept` and `read` are blocking calls by default. If `accept` can return immediately when there is no connection, we can rewrite the server loop as: check for connections; then poll all the connected sockets to see if they have any data to read; if there is data, write that back. With this approach, we can achieve our goal of serving multiple connections at the same time. However, to realize this, we need to turn all the blocking calls into non-blocking ones. Fortunately, we can switch a socket to non-blocking mode. In Rust, we can call `set_nonblocking` on a socket to opt into non-blocking mode. The TCP types exported by Tokio, Node.js and Netty set this option by default. 

```rust
fn main() -> io::Result<()> {
    // Make the listener non-blocking, `accept` returns `WouldBlock`
    // right away when no connection is waiting
    let listener = TcpListener::bind("127.0.0.1:6969")?;
    listener.set_nonblocking(true)?;

    // Registry of every connected stream
    let mut registry: Vec<TcpStream> = Vec::new();

    let mut buf: [u8; 1024] = [0; 1024];

    loop {
        match listener.accept() {
            Ok((stream, addr)) => {
                println!("received conn from addr {addr:?}");
                // make the stream non-blocking, `read` returns
                // `WouldBlock` right away when there is no data
                stream.set_nonblocking(true)?;
                registry.push(stream);
            },
            Err(e) if e.kind() == io::ErrorKind::WouldBlock => {},
            Err(e) => eprintln!("accept error {e}"),
        }

        // then poll all the connected streams for data
        registry.retain_mut(|stream| match stream.read(&mut buf) {
            Ok(0) => {
                println!("Disconnected!!");
                false
            },
            Ok(n) => {
                println!("Received : {:?}", String::from_utf8_lossy(&buf[..n]));
                // echo the same bytes back, a small echo always fits in the send buffer
                match stream.write_all(&buf[..n]) {
                    Ok(()) => true,
                    Err(e) => {
                        eprintln!("write error {e}");
                        false
                    },
                }
            },
            // no data yet, keep the stream and check again on the next pass
            Err(e) if e.kind() == io::ErrorKind::WouldBlock => true,
            Err(e) => {
                eprintln!("read error {e}");
                false
            },
        });
    }
}
```

Now we can serve multiple clients at the same time. Still, there is an issue with this approach. This server will always keep one CPU core busy, as we poll for incoming connections and data even when there is no client activity. Ideally, we want to offload polling to the kernel; our server's workload should be: register interest in activity on a socket and wake up when the socket is ready.  

### A Solution

On `macOS`, `kqueue` allows us to register interest in a set of events and notifies the application when an event is ready. `Windows` has `IOCP`, which is based on a completion model, whereas `kqueue` and Linux's `epoll` are based on a readiness model; in the completion model, we submit I/O operations to the kernel and the kernel notifies the application when the submitted operation is complete. `Linux` implemented this model with `io_uring`. An event loop is an abstraction over these platform-specific features.

<img src="/images/event-loop-kqueue-light.svg" alt="Animated diagram of a packet waking a kqueue event loop. A thread registers fd 3, fd 4 and fd 5 with kevent(EV_ADD), which attaches a knote to each socket, then parks on the kqueue. The NIC DMAs a frame into the rx ring and raises an interrupt. The driver passes it up through ether, ip and tcp, each stripping its header, and tcp appends the payload to fd 5's receive buffer. sorwakeup() fires fd 5's knote, which joins the kqueue's active list. kevent() wakes the thread and copies the event out, and read(5) copies the bytes into the thread's buffer." class="theme-light" />
<img src="/images/event-loop-kqueue-dark.svg" alt="Animated diagram of a packet waking a kqueue event loop. A thread registers fd 3, fd 4 and fd 5 with kevent(EV_ADD), which attaches a knote to each socket, then parks on the kqueue. The NIC DMAs a frame into the rx ring and raises an interrupt. The driver passes it up through ether, ip and tcp, each stripping its header, and tcp appends the payload to fd 5's receive buffer. sorwakeup() fires fd 5's knote, which joins the kqueue's active list. kevent() wakes the thread and copies the event out, and read(5) copies the bytes into the thread's buffer." class="theme-dark" />

The diagram shows the whole process across user and kernel space. There is a lot to unpack, but I will not go into the details of the various events and filters supported by `kqueue`. Its man page, `kqueue(2)`, provides sufficient details of the structs and the syscalls. 

In my event loop implementation [`pyro`](https://github.com/prudhvideep/pyro), I have implemented a simple wrapper around `kqueue` that exposes the methods [`register`](https://github.com/prudhvideep/pyro/blob/v0.1.0/src/lib.rs#L103-L132), to register events with `kqueue`, and [`poll`](https://github.com/prudhvideep/pyro/blob/v0.1.0/src/lib.rs#L163-L190), which wraps `kevent` and waits on all the registered file descriptors and copies the events that are ready into a user-space buffer. Now, the server implementation using these methods is as follows:

```rust
fn main() -> io::Result<()> {

    // init a token counter
    let mut token_counter = Token::default();
    // setup the kqueue
    let mut poll = Poll::init()?;
    
    let mut events = Events::with_capacity(64);
    let mut registry = HashMap::<Token, Connection>::new();

    // Bind a tcp listener to `127.0.0.1:6969`
    // Make the listener non-blocking
    let listener = std::net::TcpListener::bind("127.0.0.1:6969")?;
    listener.set_nonblocking(true)?;

    // register read interest for the tcp listener
    let next_token = token_counter.incr();
    poll.register(next_token, listener.as_raw_fd(), libc::EVFILT_READ)?;
    registry.insert(next_token, Connection::TcpListener(listener));

    loop {
        poll.poll(&mut events, None)?;

        if !events.is_empty() {
            process_events(&mut poll, &mut events, &mut token_counter, &mut registry)?;
        }
    }
}
```

### A Caveat

In the readiness model, the application is notified when the event is ready. An I/O operation involving files is always ready as the data is available to read, and all file I/O calls block the event loop. macOS lacks a coherent async API to handle file I/O, so an event loop implementation is paired up with a separate thread pool to perform blocking tasks. Tokio and Node.js offload file I/O to a dedicated thread pool. I will implement support for file I/O in `pyro` and update this post or write another dedicated post.
