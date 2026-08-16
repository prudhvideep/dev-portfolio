---
title: "Stackless Coroutines"
pubDatetime: 2026-08-16T20:53:07Z
description: "Stackless coroutines in C"
tags: [coroutines,concurrency]
featured: true
draft: true
--- 

In this post, I want to implement stackless coroutines in C. There are many definitions for a coroutine in the literature. Here is my simple take: a coroutine is a computation that can be suspended and resumed. For the computation to resume the state should be stored somewhere; based on how the state is handled there are two classes of coroutines: `stackful` and `stackless` coroutines.

## Stackful Coroutines

Maintain their own execution stack to store the execution context; therefore they can be suspended from anywhere. They can be invoked inside a normal function and do not color the functions. `goroutines` are an example of stackful coroutines. The Go runtime is responsible for managing and swapping the execution context when tasks are multiplexed onto an operating system thread.

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

For a non trivial value of `count`, the runtime may suspend and resume the tasks, interleaving their execution. Since each task has its own managed stack, we could invoke these tasks without having to color main.

## Stackless Coroutines

These are commonly implemented as a state machine. They don't maintain a separate stack to store their execution state. Examples of stackless coroutines include `generators` in Python and async functions in Rust. Since there is no explicit stack involved, they are lightweight and work well in resource constrained environments. 

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

## Duff's Device

Invented by Tom Duff while working on optimizing the performance of a real time animation program, this technique uses a switch statement combined with a do while loop to perform manual loop unrolling. For trivial loops with independent computations, modern optimizing compilers can automatically perform this for us. 

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

In the above snippet, the loop runs twice. In the first iteration, we match `case 7` and `count` is incremented to 7 due to the `switch` fall-through behavior. In the next iteration, the count is incremented by 8, bringing the total to 15. Altough this syntax looks like a pr nightmare (pun intended), this is perfectly valid ISO C. 

