---
title: "My approach to re-learning distributed systems."
pubDatetime: 2024-10-10T00:00:00Z
description: "Principled way in which i'm planning to re-learn distributed systems."
tags: [distributed-systems]
featured: true
---

My approach to learning things in computer science involves building short feedback loops. For example, my process for learning File IO in Go would include coming up with a use case that requires the use of file operations, such as finding the word count of a file. Then, I would review the documentation and write code to realize this use case. The purpose would drive my learning, and the feedback from executing the code would reinforce my understanding. Say I mastered file operations. Is this the end? No. Next, I would widen the problem scope to encompass more concepts and keep the feedback loop going.

This process is not different from how we learn a new piece of information: forming analogies to link the latest information to an existing familiar one. The only novelty it induces in the general learning framework is a short result-driven feedback loop to keep the learning focused. This approach works well with centralized systems, where we often try to solve similar problems in different contexts. However, I'm unsuccessful in developing a generic thinking model that can help me understand distributed systems using the above approach. Instead of trying to relate distributed constructs to centralized constructs, I firmly believe I should start treating distributed systems as a [radical novelty.](https://www.cs.utexas.edu/~EWD/transcriptions/EWD10xx/EWD1036.html)

> *Coping with radical novelty requires an orthogonal method. One must consider one's own past, the experiences collected, and the habits formed in it as an unfortunate accident of history, and one has to approach the radical novelty with a blank mind, consciously refusing to try to link it with what is already familiar, because the familiar is hopelessly inadequate.*
>
> *— On the cruelty of really teaching computing science*

Here is a principled way in which i'm planning to re-learn distributed systems.

## Predicate logic, reasoning about safety and progress

Resource: [Introduction to Distributed Systems](https://cse.buffalo.edu/~demirbas/CSE586/book.pdf)

## TLA+

TLA+ is a "formal specification language", a means of designing systems that lets you directly test those designs.

Resource: [Learn TLA](https://learntla.com/)

## Impossibility results

Resources:

1. [http://muratbuffalo.blogspot.com](http://muratbuffalo.blogspot.com)
2. [Paper trail](https://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/)
3. [Hacking Distributed #NoSQL tag](https://hackingdistributed.com/tag/nosql/)
4. [Consensus and Byzantine faults](https://decentralizedthoughts.github.io/videos/)
5. [Marc Brooker's blog](https://brooker.co.za/blog/)

## Consensus and fault-tolerance

## Managing time and state in distributed systems

Resource: [Introduction to Distributed Systems](https://cse.buffalo.edu/~demirbas/CSE586/book.pdf)

I'll keep updating this post with more resources and interesting surmises as i delve deeper into these topics.
