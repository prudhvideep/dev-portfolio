---
title: "Stackless Coroutines"
pubDatetime: 2026-08-16T20:53:07Z
description: "Stackless coroutines in C"
tags: [coroutines, concurrency]
featured: true
---

There are many definitions for a coroutine in the literature. Here is my simple take: a coroutine is a computation that can be suspended and resumed. For the computation to resume the state should be stored somewhere; based on how the state is handled there are two classes of coroutines: stackless and stackful coroutines. This article focuses on stackless coroutines and their implementation using Duff's device.

## Stackless Coroutines

Stackless coroutines are commonly implemented as a state machine. They don't maintain a separate stack to store their execution state. Examples of stackless coroutines include generators in Python and async functions in Rust. Since there is no explicit stack involved, they are lightweight and work well in resource-constrained environments.

```python
def generate_fibonacci(n):
    prev,cur = 0,1

    for _ in range(n):
        yield prev
        prev,cur = cur,prev+cur

# A call to generate_fibonacci returns a generator object
fib_iter = generate_fibonacci(5)
#yield produces a value and suspends the function
#Calling next(fib_iter) resumes execution
next(fib_iter) # returns 0
next(fib_iter) # returns 1
```

However, not maintaining an explicit stack to store the execution context comes with a few limitations. We cannot suspend a coroutine from a normal function. A normal function's stack frame is reclaimed once the function call is done, so there is no context left to resume into; however, we can call a coroutine from another coroutine. This leads to what we call function colouring discussed in the post [What Color is Your Function?](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/).

## Stackful Coroutines

Stackful coroutines maintain their own execution stack to store the execution context; therefore they can be suspended from anywhere. They can be invoked inside a normal function and do not color the functions. goroutines are an example of stackful coroutines. The Go runtime is responsible for managing and swapping the execution context when tasks are multiplexed onto an operating system thread.

```go
func task_1(count int, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := range count {
		fmt.Println("Task 1 : ",i)
	}
}

func task_2(count int, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := range count {
		fmt.Println("Task 2 : ",i)
	}
}

func main() {
	var wg sync.WaitGroup

	wg.Add(2)
	go task_1(50, &wg)
	go task_2(50, &wg)
	wg.Wait()
}
```

For a non-trivial value of `count`, the runtime may suspend and resume the tasks, interleaving their execution. Since each task has its own managed stack, we could invoke these tasks without having to color main.

## Duff's Device

Invented by Tom Duff while working on optimizing the performance of a real-time animation program, this technique uses a `switch` statement combined with a `do while` loop to perform manual loop unrolling. For trivial loops with independent computations, modern optimizing compilers can automatically perform this for us.

```c
int num_elements = 15;
int turns = (num_elements + 7) / 8;
int count = 0;

switch (num_elements % 8) {
	do{
	case 0: count+=1;
	case 7: count+=1;
	case 6: count+=1;
	case 5: count+=1;
	case 4: count+=1;
	case 3: count+=1;
	case 2: count+=1;
	case 1: count+=1;
	} while (--turns > 0);
}
```

In the above snippet, the loop runs twice. In the first iteration, we match `case 7` and `count` is incremented to 7 due to the `switch` fall-through behavior. In the next iteration, the count is incremented by 8, bringing the total to 15. Although this syntax looks like a PR nightmare (pun intended), this is perfectly valid ISO C.

A stackless coroutine needs two things to suspend and resume. It needs its locals to survive between the points of suspension and it needs to know where to pick up from the next time it is called. Duff's device showed us that case labels in a `switch` act as a `goto` and we can use them to transfer control into a nested block. We can use this construct to implement a state machine that drives the coroutine and we can provide some heap-allocated structure to store all the local state that needs to survive between the points of suspension. I've combined these two ideas to implement a simple counter that yields the next increment.

```c
typedef struct Ctx Ctx;
struct Ctx {
    int state;
    int idx;
    // locals
};

#define CO_START(ctx) \
    do {\
         switch((ctx)->state) { \
            case 0:

#define CO_YIELD(ctx, value)\
        (ctx)->state = __LINE__; \
        return (value); \
        case __LINE__:

#define CO_END(ctx) \
           (ctx)->state=0;\
        }\
    } while(0);

int counter(Ctx *ctx) {
   CO_START(ctx)

   for (ctx->idx = 0; ctx->idx < 5; ctx->idx++) {
        CO_YIELD(ctx, ctx->idx);
   }

   CO_END(ctx)

   return -1;
}


int main(void) {
	Ctx *ctx = malloc(sizeof(Ctx));
	ctx->state = 0;
	ctx->idx = 0;

	counter(ctx); // returns 0
	counter(ctx); // returns 1
	counter(ctx); // returns 2

	return 0;
}
```

The macros act as sugar for the state machine implementation and help us reason about the code. Every yield returns and suspends the coroutine, and all the local state is maintained in the struct `Ctx`. In `CO_YIELD`, we update the state and yield the value; on subsequent invocations the control jumps directly inside the loop.

Many languages have built-in constructs that can make implementing coroutines easier. In Rust, async functions return a future, which is a state machine the compiler generates from the function body. An executor provided by a runtime like Tokio can drive the futures to completion. A coroutine on its own is just a function that can pause. It is also the fundamental unit behind how concurrency is implemented in modern languages like Go and Rust.