---
title: "Arenas in Rust - Part 1"
pubDatetime: 2026-05-10T00:00:00Z
description: "Building cyclic data structures in Rust."
tags: [rust,arenas]
featured: true
---

Rust makes it very hard to implement self-referential data structures.
To drive this point home, I will try to implement a simple linked list with two nodes that form a cycle. First, I will use smart pointers to implement the linked list. The list node will have a data field and an optional heap-allocated next node. To create a cycle, we need two nodes and their next fields should refer to each other.

```rust
struct Node {
    data : u32,
    next : Option<Box<Node>>
}

fn main() {
   let mut node1: Box<Node> = Box::new(Node { data : 1, next : None});
   let mut node2: Box<Node> = Box::new(Node { data : 2, next : None});

   node1.next = Some(node2);
   node2.next = Some(node1);
}
```

Running this code yields: `error[E0382]: assign to part of moved value: node2`. To get over this bump we need to understand Rust's ownership model. Rust allows a binding to uniquely own a value. When the value is reassigned, the original binding no longer owns this value and gets invalidated. Any subsequent use of this binding results in a compile-time error.

In our program, when `node1.next` was assigned to `Some(node2)`, the ownership of `node2`'s value was transferred to the next field of `node1` and the binding `node2` was invalidated. The compiler errors out when we try to use the invalidated binding.

```rust
error[E0382]: assign to part of moved value: `*node2`
  --> src/main.rs:16:4
   |
13 |    let mut node2: Box<Node> = Box::new(Node { data : 2, next : None});
   |        --------- move occurs because `node2` has type `Box<Node>`, which does not implement the `Copy` trait
14 |
15 |    node1.next = Some(node2);
   |                      ----- value moved here
16 |    node2.next = Some(node1);
   |    ^^^^^^^^^^ value partially assigned here after move
```

## Shared Ownership

If we read the definition of `Node` through the lens of ownership, it translates to something like this: "the `next` field owns a heap-allocated `Node`". To successfully implement a cycle, we need to somehow let the compiler know that the data owned by the binding **node2** can also be owned by the **next** field of **node1**. This can be done using reference counting, which Rust provides through `Rc<T>`.

```rust
struct Node {
    data : u32,
    next : Option<Rc<Node>>
}

let mut node1: Rc<Node> = Rc::new(Node {    
   data: 10,
   next: None,
});
let mut node2: Rc<Node> = Rc::new(Node {
   data: 20,
   next: None,
});
node1.next = Some(node2.clone());
node2.next = Some(node1.clone());
```

Unfortunately, wrapping our data with `Rc` alone will not solve our problem; `Rc<T>` provides only shared access to `T`, so we cannot modify the `next` field in the struct. Think about it: if `Rc` were mutable, the value of a binding could change behind its back, effectively bypassing Rust's ownership. Running the code yields the following error:

```rust
22 |     node1.next = Some(node2.clone());
   |     ^^^^^^^^^^ cannot assign
   |
   = help: trait `DerefMut` is required to modify through a dereference, but it is not implemented for `Rc<Node>`

error[E0594]: cannot assign to data in an `Rc`
```

## Interior Mutability

To create a cycle, we need to mutate the value inside `Rc<T>` which only provides shared access `&T`. This is exactly the functionality that interior mutability enables us to realize. The standard library provides containers like `Cell<T>` and `RefCell<T>`, which allow us to mutate a shared reference `&T`.

### Why Interior Mutability?

For an object `T`, Rust allows one mutable reference `&mut T` or multiple immutable references `&T`. This check turns out to be too rigid to represent some valid programs. A common one: an object shared read-only across many callers that still needs to mutate its own internal bookkeeping.

Let's examine Tokio's `tracing` library. Tokio is an async runtime, which runs multiple tasks concurrently across a fixed set of threads. Users annotate their code with tracing spans, which send events to a global subscriber object that collects and processes them.

```rust
let _span = tracing::info_span!("handle_request", path = req.path()).entered();
```

Subscriber implements the `Layer` trait, which defines the following methods.

```rust
fn on_new_span(&self, attrs: &Attributes<'_>, id: &Id, ctx: Context<'_, S>) { ... }
fn on_enter(&self, id: &Id, ctx: Context<'_, S>) { ... }
fn on_exit(&self, id: &Id, ctx: Context<'_, S>) { ... }
fn on_close(&self, id: Id, ctx: Context<'_, S>) { ... }
fn on_record(&self, id: &Id, values: &Record<'_>, ctx: Context<'_, S>) { ... }
fn on_event(&self, event: &Event<'_>, ctx: Context<'_, S>) { ... }
```
The subscriber object maintains a thread-local copy of span context and mutates it as it receives events. It is perfectly valid to share this object and update the span context as each thread will only modify its own private copy and will not cause any data races. `tracing` stores this in a thread-local wrapped in a `RefCell`.

```rust
current_spans: ThreadLocal<RefCell<SpanStack>>
```

Had it not been for interior mutability, all the trait methods would need to accept `&mut self` in order to mutate the span context. Since a single subscriber is shared by every worker thread, and there can only be one `&mut` reference at a time, every access would have to be synchronized. This would introduce a lot of contention and throttle our program, a huge penalty to pay just for the sake of tracing.

### RefCell

`RefCell<T>` provides methods `borrow` and `borrow_mut`, which return `Ref` and `RefMut` respectively, to access `T`. These are not traditional references, so they are invisible to the borrow checker; however, borrow checking is enforced at runtime, and any violation results in a `panic`.

```rust caption="Snippet 1: A shared and a mutable borrow of the same RefCell, held at the same time."
fn main() {
    let cell: RefCell<Vec<i32>> = RefCell::new(vec![1, 2, 3]);

    let _borrow1: Ref<'_, Vec<i32>> = cell.borrow();
    let _borrow2: RefMut<'_, Vec<i32>> = cell.borrow_mut();
}
```

```rust
thread 'main' (15519302) panicked at src/main.rs:11:25:
RefCell already borrowed
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

In Snippet 1, a `Ref` and a `RefMut` are alive at the same time. The code compiles but panics at runtime, because the borrow rules are enforced dynamically rather than by the borrow checker. 

## Leaking Memory

So far, we have tried and failed to implement a cycle; in this process, we have looked at various Rust primitives required to build one. Putting it all together, we can model our list using `Rc<RefCell<T>>`: `Rc` gives us shared ownership, and `RefCell` lets us mutate a node through a shared reference.

```rust 
#[derive(Debug)]
struct Node<T> {
    data : T,
    next : Option<Rc<RefCell<Node<T>>>>
}

impl <T> Node<T> {
    fn new(data : T) -> Self{
        Self {
            data,
            next : None
        }
    }
}

fn main() {
    let node1 = Rc::new(RefCell::new(Node::new(10)));
    let node2 =  Rc::new(RefCell::new(Node::new(20)));

    node1.borrow_mut().next = Some(node2.clone());
    node2.borrow_mut().next = Some(node1.clone());

    println!("Ref count Node 1 : {:?}",Rc::strong_count(&node1));
    println!("Ref count Node 2 : {:?}",Rc::strong_count(&node2));
}
```
This compiles and prints a strong count of 2 for both nodes, signifying multiple ownership (the value assigned to node1 is owned both by node1 and the next field of node2). Since the two nodes refer to each other through their next fields, the strong count does not go to zero even when both nodes go out of scope, thus leaking memory.

## Arenas

In the sections above, I explained the ceremony involved in implementing self-referential data structures. Rust's strict ownership and aliasing guarantees, enforced by the borrow checker, make cycles very difficult to implement. In this section, I will explore the ways in which arenas can help improve the ergonomics of working with self-referential data structures.

In low-level systems languages with manual memory management, we need to explicitly manage every allocation and deallocation. Anyone familiar with `C` and `C++` knows about `malloc` and `free`. Freeing memory allocated with `malloc` usually does not return it to the operating system; instead, the freed block is placed on a free list. This avoids the expensive allocation path and promotes reusing memory the process already holds.

On Linux, that path means asking the kernel for more memory: growing the heap through the `brk` syscall, or serving large allocations with `mmap`. Frequent, non-uniform allocations fragment memory and increase pressure on the system allocator. To avoid this, we can preallocate the required memory and deallocate it once the task is complete. This upfront allocation, which collapses many allocations and frees into a single one, is called an arena.

### Indexed Arena

Now, let's reason about implementing cyclic data structures using arenas. Say an arena owns all the nodes of a data structure; we can deallocate the whole arena once we are done with it. It is perfectly fine for nodes in the arena to refer to each other and form cycles: since they are all deallocated together, there is no possibility of dangling references.

Unfortunately, this is hard to implement directly. Suppose we back the arena with a `Vec`. The binding owns the entire vector, so if we take a mutable reference to one element and store it inside another, the borrow checker immediately complains: it sees this as two mutable borrows of the same `Vec`.

To get around this, we can use a technique similar to what `RefCell` does with `Ref` and `RefMut`: instead of storing references to other elements, each element stores the index of the element it points to. Like `Ref` and `RefMut`, indices are invisible to the borrow checker. We call this an indexed arena.

```rust caption="A simple indexed arena"
#[derive(Debug,Clone,Copy,PartialEq, Eq, PartialOrd, Ord)]
pub(crate) struct Idx(usize);

impl From<usize> for Idx {
    #[inline]
    fn from(value: usize) -> Self {
        Idx(value)
    }
}

impl From<Idx> for usize {
    #[inline]
    fn from(value: Idx) -> Self {
        value.0
    }
}

#[derive(Debug,Default)]
pub struct Arena<T> {
    buffer: Vec<T>,
}

impl<T> Index<Idx> for Arena<T> {
    type Output = T;

    fn index(&self, index: Idx) -> &Self::Output {
        &self.buffer[usize::from(index)]
    }
}

impl<T> IndexMut<Idx> for Arena<T> {
    fn index_mut(&mut self, index: Idx) -> &mut Self::Output {
        &mut self.buffer[usize::from(index)]
    }    
}

impl<T> Arena<T> {
    pub fn new() -> Self {
        Self { buffer: Vec::new() }
    }

    fn next_index(&self) -> usize {
        self.buffer.len()
    }

    pub fn alloc(&mut self, data: T) -> Idx {
        let idx: usize = self.next_index();
        self.buffer.push(data);
        idx.into()
    }
}
```

### Cyclic Graph

Now let's use the arena to implement a graph containing a cycle.

![A directed cyclic graph: node a points to b, b points to c, and c points back to a, forming a triangle.](/images/cycle-graph.svg)

Each `GraphNode` stores the indices of its neighbours in a `Vec` rather than references to them.

```rust
#[derive(Debug)]
struct GraphNode {
    edges: Vec<Idx>,
}

impl GraphNode {
    fn new() -> Self {
        Self { edges: Vec::new() }
    }
}
```
`Graph` is an arena of `GraphNode`s.

```rust
#[derive(Debug)]
struct Graph {
    arena: Arena<GraphNode>,
}

impl Graph {
    fn new() -> Self {
        Self {
            arena: Arena::<GraphNode>::new(),
        }
    }

    fn add_vertex(&mut self) -> Idx {
        self.arena.alloc(GraphNode::new())
    }

    fn add_edge(&mut self, u: Idx, v: Idx) {
        self.arena[u].edges.push(v);
    }
}
```

Building the graph from the figure is now just a sequence of `add_vertex` and `add_edge` calls:

```rust
fn main() {
    let mut graph = Graph::new();

    let a = graph.add_vertex();
    let b = graph.add_vertex();
    let c = graph.add_vertex();
     
    graph.add_edge(a,b);
    graph.add_edge(b, c);
    graph.add_edge(c, a);

    println!("{graph:#?}");
}
```

With this approach, there is no need to reach out for `Rc` and `RefCell`; we do not pay the cost of runtime borrow checking. All the data required to implement a data structure resides in the backing arena and it will be dropped as a whole, making the ownership explicit and simple to track.

---

In the arena implementation, I've left out many details to keep the API simple. For instance, `Idx` does not have any information about `T`; we can make it type-aware by using a marker type `PhantomData`. Even then, it's possible to mix up the indices between two arenas of the same type. We can fix this using branded lifetimes, which require some understanding of how lifetimes work. Indices also add a layer of indirection; ideally, `alloc` should hand back a reference to the allocation itself, which we could store inside other nodes to wire them together directly. This is exactly what a bump allocator like the `bumpalo` crate does. 

In the next part, I'll improve the indexed arena implementation and discuss generational arenas, lifetimes, and bump-allocated arenas. For a more polished implementation of an indexed arena, I'd implore you to look into the crate `la-arena` used by `rust-analyzer`.

