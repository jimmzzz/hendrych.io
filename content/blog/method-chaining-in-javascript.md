---
title: 'Method chaining in JavaScript'
description: 'Learn what method chaining is, why it works with this, and how to design immutable chains that return a new instance on every call.'
tags: [ javascript ]
author: 'Tomáš Hendrych'
createdAt: '2026-07-25T17:24:00+01:00'
difficulty: 'advanced'
---

- [Prerequisites](#prerequisites)
- [What is method chaining?](#what-is-method-chaining)
- [Why chaining works with this](#why-chaining-works-with-this)
- [Mutable chaining (return this)](#mutable-chaining-return-this)
- [Immutable chaining (return a new object)](#immutable-chaining-return-a-new-object)
- [How does "new itself" work?](#how-does-new-itself-work)
- [Trade-offs: mutable vs immutable](#trade-offs-mutable-vs-immutable)
- [Common mistakes](#common-mistakes)
- [Summary](#summary)

## Prerequisites

- Basic understanding of JavaScript classes and the [`this` keyword](/blog/this-keyword).

## What is method chaining?

Method chaining is a pattern where you call multiple methods in a single expression with result from previous method being used to call the next one.:

```js [index]
obj.add(2)
   .multiply(3)
   .subtract(4) // results in 2 * 3 - 4 = 2;
```

For chaining to work, each method must return an object that has the next method.

Most often, methods return:

- `this` (the same object) -> mutable chaining
- `new ClassName(...)` (a new object) -> immutable chaining

## Why chaining works with this

In a regular method call like `calculator.add(2)`, the value of `this` inside `add()` is the object on the left side of the dot (`calculator`).

If `add()` returns `this`, it returns that same object again, so you can keep calling more methods on it.

```js [index]
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  multiply(n) {
    this.value *= n;
    return this;
  }
};

calculator.add(2).multiply(3);
console.log(calculator.value); // 6
```

## Mutable chaining (return this)

Mutable chaining changes internal state and returns the same instance.

```js [index]
class MutableCounter {
  constructor(value = 0) {
    this.value = value;
  }

  increment() {
    this.value += 1;
    return this;
  }

  add(n) {
    this.value += n;
    return this;
  }

  getValue() {
    return this.value;
  }
}

const counter = new MutableCounter();
const result = counter.increment().add(4).increment().getValue();

console.log(result); // 6
console.log(counter.getValue()); // 6 (same object was mutated)
```

### When to use mutable chaining

- builder-like APIs where mutation is expected
- performance-sensitive code where creating many objects is undesirable
- ergonomics where a fluent interface is the goal

## Immutable chaining (return a new object)

Immutable chaining does not modify the current instance. Instead, each method returns a new instance with updated data.

```js [index]
class ImmutableCounter {
  constructor(value = 0) {
    this.value = value;
  }

  increment() {
    return new ImmutableCounter(this.value + 1);
  }

  add(n) {
    return new ImmutableCounter(this.value + n);
  }

  getValue() {
    return this.value;
  }
}

const base = new ImmutableCounter(0);
const next = base.increment().add(4).increment();

console.log(base.getValue()); // 0 (original stays unchanged)
console.log(next.getValue()); // 6
```

This is what you described as "calling the object with new itself":

- the method belongs to `ImmutableCounter`
- inside the method, we create a fresh instance with `new ImmutableCounter(...)`
- every step in the chain returns a new object

## How does "new itself" work?

When a method does this:

```js [index]
return new ImmutableCounter(updatedValue);
```

it creates a new instance of the same class. The returned object still has the same methods (`increment`, `add`, ...), so the chain can continue.

A more flexible version uses `this.constructor`, which helps with inheritance:

```js [index]
class Amount {
  constructor(value) {
    this.value = value;
  }

  add(n) {
    return new this.constructor(this.value + n);
  }
}
```

### Use case for immutable chaining
- To avoid side effects and ensure that each step in the chain produces a new, independent object. This is particularly valuable in functional programming paradigms, where immutability is a key principle.
- **State management** libraries (like Redux) often favor immutable patterns to make state changes predictable and easier to debug.
- **Redo/undo functionality** can be implemented more easily with immutable objects, as each state can be preserved without risk of accidental mutation.

Now subclasses can inherit chainable immutable behavior without hardcoding class names.

## Trade-offs: mutable vs immutable

| Aspect | Mutable (`return this`) | Immutable (`return new ...`) |
|---|---|---|
| Object creation | Low | Higher |
| Side effects | More likely | Less likely |
| Debugging state changes | Harder in shared objects | Usually easier |
| Concurrency / predictability | Lower | Higher |
| API feel | Fluent and simple | Fluent and safer |

There is no universal winner. The best choice depends on your API design and constraints.

## Common mistakes

1. Forgetting to return anything from a method.

```js [index]
add(n) {
  this.value += n;
  // missing: return this;
}
```

Then the next call fails because the previous call returned `undefined`.

2. Using arrow functions for object methods that rely on `this`.

```js [index]
const broken = {
  value: 0,
  add: (n) => {
    this.value += n; // 'this' is not the object here
    return this;
  }
};
```

Use regular method syntax instead.

3. Mixing mutable and immutable methods without documenting it. If one method mutates while another returns a new instance, the API becomes confusing.

## Summary

- Method chaining means each method returns an object that supports the next method call.
- Mutable chaining returns `this` and updates the same instance.
- Immutable chaining returns a new instance (for example with `new ClassName(...)`) on every step.
- "Calling the object with new itself" is a practical immutable pattern where each method constructs the next state.
- Choose mutable or immutable chaining based on clarity, safety, and performance needs.
