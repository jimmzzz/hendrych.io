---
title: 'Linear search algorithm'
description: 'The linear search algorithm is a simple search technique used to find the position of a target element in a list by checking each element sequentially.'
# image: 'img/blog/animated-landing-page.png'
tags: [ algorithms, javascript ]
author: 'Tomáš Hendrych'
createdAt: '2026-07-24T17:30:00+01:00'
difficulty: 'basic'
---

- [What is the linear search algorithm?](#what-is-the-linear-search-algorithm)
- [Key characteristics](#key-characteristics)
- [Use cases for linear search](#use-cases-for-linear-search)
- [Implementing linear search in JavaScript](#implementing-linear-search-in-javascript)
- [Time complexity](#time-complexity)
- [Summary](#summary)

## What is the linear search algorithm?

The linear search algorithm is a simple search technique used to find the position of a target element in a list by checking each element sequentially.


## Key characteristics of linear search

- checks each element in the list sequentially
- returns the index of the target element if found, otherwise returns -1

## Use cases for linear search

- small lists
- unsorted lists
- when simplicity is preferred over performance

## Implementing linear search in JavaScript

**Input**:
  - `arr`: an array of elements
  - `target`: the element to search for

**Output**:
  - the index of the target element if found
  - `-1` if the target element is not found

**Implementation tips:**

- use a `for` loop to iterate through the array
- compare each element with the target

```js [index]
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [1, 3, 5, 7, 9];
console.log(linearSearch(numbers, 5)); // 2
console.log(linearSearch(numbers, 4)); // -1
```

## Time complexity

In the worst case, the algorithm must check every element in the list, resulting in **a linear time complexity**. Increasing the size of the list will lead to a proportional increase in the time taken to search for the target element.

**Worst case**: O(n) - the target element is at the end of the list or not present

For example, if the list has 10 elements, the algorithm may need to check all 10 elements in the worst case. If the list has 100 elements, it may need to check all 100 elements, and so on.


## Summary

- The linear search algorithm is a simple search technique used to find the position of a target element in a list by checking each element sequentially.
- It is easy to implement and works well for small or unsorted lists.
- However, it is not efficient for large lists compared to more advanced search algorithms like binary search.

Disclaimer: This article was written for educational purposes with help of AI for ideation, grammar and spelling check.
