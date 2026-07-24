---
title: 'Throttle function'
description: 'The throttle function is a programming technique used to limit the rate at which a function can be invoked, ensuring that it is executed at most once in a specified time interval.'
# image: 'img/blog/animated-landing-page.png'
tags: [ algorithms, javascript ]
author: 'Tomáš Hendrych'
createdAt: '2026-06-09T18:00:00+01:00'
difficulty: 'advanced'
draft: true
---

- [What is a throttle function?](#what-is-a-throttle-function)
- [Key characteristics](#key-characteristics)
- [Use cases for throttling](#use-cases-for-throttling)
- [Implementing a throttle function in JavaScript](#implementing-a-throttle-function-in-javascript)
- [Summary](#summary)

## What is a throttle function?

A throttle function is a programming technique used to limit the rate at which a function can be invoked. It ensures that a function is **executed at most once in a specified time interval**.


## Key characteristics

- allows a function to be executed **at most once in a specified time interval**
- executes immediately on the first call, and then ignores subsequent calls until the time interval has passed

**Example:**
Scroll events can trigger a function that updates the position of an element on the page. If the user scrolls rapidly, the function may be called many times in quick succession, which can lead to performance issues. By using a throttle function, we can ensure that the function is only executed once every 100 milliseconds, for example, regardless of how many times the user scrolls.


## Use cases for throttling

- scroll events
- window resizing
- mouse movement
- API rate limiting

## Implementing a throttle function in JavaScript

There are many ways to implement a throttle function in JavaScript.

Lets specify our input and output of the throttle function:

**Input**:
  - callback function
  - delay in milliseconds

**Output**:
  - a new throttled function

**Implementation tips:**

- use a variable to track the ```lastExecutionTime``` of the function in outer scope (closure)
- when the throttled function is called, check the current time (`now`) against the ```lastExecutionTime```
  - if the time difference is greater than or equal to the specified delay, execute the function and update the ```lastExecutionTime```
  - else, if the time difference is less than the specified delay, ignore the call and do not execute the function, so we can omit the else block completely
  - we have to use `fn.apply(this, args)` to ensure that the original function is called with the correct `this` context and arguments when it is executed.

```js [index]
function throttle(fn, delay) {
  let lastExecutionTime = 0;

  return function throttled(...args) {
    const now = performance.now();

    if (now - lastExecutionTime >= delay) {
      fn.apply(this, args);
      lastExecutionTime = now;
    }
  };
}

const log = throttle((msg: string) => console.log(msg), 300)
log('a')  // fires immediately → "a"
log('b')  // ignored (within 300ms)
log('c')  // ignored (within 300ms)
setTimeout(() => log('d'), 300)  // fires → "d" (300ms passed)
```

## Summary

- A throttle function is a programming technique used to limit the rate at which a function can be invoked, ensuring that it is executed **at most once in a specified time interval**.
- Throttling is useful for optimizing performance and improving user experience in scenarios with rapid, repeated events, which could cause performance issues or unintended consequences if handled without control.
- Common use cases include scroll events, window resizing, mouse movement, and API rate limiting.
