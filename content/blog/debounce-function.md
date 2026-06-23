---
title: 'Debounce function'
description: 'Learn what a debounce function is, how it works, and how to implement it in JavaScript to improve performance and user experience.'
# image: 'img/blog/animated-landing-page.png'
tags: [ JavaScript ]
author: 'Tomáš Hendrych'
createdAt: '2026-06-08T18:00:00+01:00'
difficulty: 'advanced'
draft: true
---

- [What is a debounce function?](#what-is-a-debounce-function)
- [Key characteristics of a debounce function](#key-characteristics-of-a-debounce-function)
- [Use cases for debouncing](#use-cases-for-debouncing)
- [Implementing a debounce function in JavaScript](#implementing-a-debounce-function-in-javascript)
- [Summary](#summary)

## What is a debounce function?

A debounce function is a programming technique used to limit the rate at which a function can be invoked. It ensures that a function is **only executed after a certain amount of time has passed since the last time it was invoked**.


## Key characteristics of a debounce function

- delays the execution of a function until a specified time has passed since the last time it was invoked
- new / next call cancels the previous one (resets the timer)
- executes only after a certain amount of time has passed since the last call
- only executes once, after the last call, if there are no new calls within the specified time frame

**Example:** Imagine you have a button on a page that triggers some action when clicked. If the user clicks it multiple times in quick succession, the action will only be executed once, after the user has stopped clicking for a certain amount of time. This can help prevent unintended consequences and improve performance by reducing the number of times the action is executed.

## Use cases for debouncing

Debouncing is useful for optimizing performance and improving user experience in scenarios with rapid, repeated events, which could cause performance issues or unintended consequences if handled without control. 

Common use cases include:

- input validation
- search suggestions
- window resizing
- scroll events

## Implementing a debounce function in JavaScript

There are many ways to implement a debounce function in JavaScript.

Lets specify our input and output of the debounce function:

- **Input**: 
  - a function to be debounced and
  - **delay time** in milliseconds

- **Output**: 
  - a new debounced function


```js [index]
function debounce(fn, delay) {
  let timer;
  
  return function debounce(...args) {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const log = debounce((message) => console.log(message), 300);

log('Hello 1'); // Will not log "Hello 1" because the next call resets the timer before 300ms
log('Hello 2'); // Will will not log "Hello 2" because the next call resets the timer before 300ms
setTimeout(() => log('Hello 3'), 299); // Will NOT log "Hello 3" because the next call resets the timer before 300ms. (299ms is less than 300ms)
setTimeout(() => log('Hello 4'), 600); // Will log "Hello 4" after 300ms because there are no new calls to log() within that time frame

// OUTPUT:
// "Hello 4" (after approximately 900ms)

// Timeline of events:
// 0 -> 299ms: log('Hello 1') -> timer set to log "Hello 1" after 300ms
// 0 -> 299ms: log('Hello 2') -> timer reset, now set to log "Hello 2" after 300ms
// 299ms: log('Hello 3') -> timer reset, now set to log "Hello 3" after 300ms
// 600ms: log('Hello 4') -> timer reset, now set to log "Hello 4" after 300ms
// 900ms: "Hello 4" is logged to the console
```

## Summary

- A debounce function is a programming technique used to limit the rate at which a function can be invoked.
- It ensures that a function is only executed after a certain amount of time has passed since the last time it was invoked.
- Key characteristics include delaying execution, resetting the timer on new calls, and executing only once after the last call if there are no new calls within the specified time frame.