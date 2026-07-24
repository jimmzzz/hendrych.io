---
title: 'This keyword in JavaScript'
description: 'Understand the behavior of the `this` keyword in JavaScript, how it changes based on context, and how to control its value using different techniques.'
# image: 'img/blog/animated-landing-page.png'
tags: [ javscript ]
author: 'Tomáš Hendrych'
createdAt: '2026-06-02T18:00:00+01:00'
difficulty: 'beginner'
---


- [The global context (default binding)](#the-global-context-default-binding)
- [Regular function](#regular-function)
- [Arrow function](#arrow-function)
- [Explicit binding with call, apply, and bind](#explicit-binding-with-call-apply-and-bind)
  - [Call() function](#call-function)
  - [Apply() function](#apply-function)
  - [Bind() function](#bind-function)
- [The new Keyword (Constructor Functions)](#the-new-keyword-constructor-functions)
- [Event handler](#event-handler)
- [Summary](#summary)

---

### Definition

In JavaScript, `this` is a special keyword that refers to the context in which a function is executed. The value of `this` can change depending on how a function is called, making it a powerful but sometimes confusing feature of the language.


## The global context (default binding)

When used outside of any function, `this` refers to the global execution context.


- **In a browser:** `this` refers to the `window` object.
- **In Node.js:** `this` refers to the global `module.exports` object.

```js [index]
console.log(this); // In a browser, this outputs the Window object
```


## Regular function

The value of `this` keyword refers to the object that is **calling/invoking** the function.

> The first object on the left side of the dot when the function is called.

```js [index]
function foo() {
  console.log(this);
}
foo(); // Outputs: Window object
```

In the example above the regular function is declared in global scope. So if we call `foo()` it points to the global object, for globally declared functions/variable the `window` object can be omitted. So `window.foo()` is the same as `foo()`.

```js [index]
const obj = {
  name: 'My Object',
  foo: function() {
    console.log(this.name);
  }
};

obj.foo(); // Outputs: "My Object"
```

If we call `foo()` as a method of `obj`, then `this` refers to `obj`, and we can access its properties.

Now example with multiple levels of nesting:

```js [index]
const obj = {
  name: 'My Object',
  foo: function() {
    console.log(this.name); // "My Object"
    function bar() {
      console.log(this.name); // undefined (or Window's name in non-strict mode)
    }
    bar();
  }
};

obj.foo();
```

In the example above, `bar()` is a regular function defined inside `foo()`. When `bar()` is called, it does not have its own `this` context, so it defaults to the global object (or `undefined` in strict mode). Therefore, `this.name` inside `bar()` does not refer to `obj.name`, but rather to the global context.

## Arrow function

The arrow function **does not have its own** `this` context at all.

> The value of `this` inside an arrow function is determined by the surrounding (lexical) context in which the arrow function is defined.

It goes up the scope chain until it finds a regular function or the global context. If it finds a regular function, it uses that function's `this` value. If it reaches the global context without finding a regular function, it uses the global object as `this`.

```js [index]
const obj = {
  name: 'My Object',
  foo: () => {
    console.log(this.name); // undefined
  }
};

obj.foo();
```

In the example above, `foo` is an arrow function defined inside the object `obj`. However, since arrow functions do not have their own `this` context, they inherit `this` from the surrounding scope. In this case, the surrounding scope is the global context (or module context in Node.js), where `this.name` is not defined, resulting in `undefined`.

now example with multiple levels of nesting, so not referencing the global context:

```js [index]
const obj = {
  name: 'My Object',
  foo: function() {
    console.log(this.name); // "My Object"
    const bar = () => {
      console.log(this.name); // "My Object"
    }
    bar();
  }
};

obj.foo();
```

In this example, `bar` is an arrow function defined inside the regular function `foo`. Since `bar` is an arrow function, it inherits `this` from its surrounding context, which is the `foo` function. Therefore, when `bar()` is called, it accesses the same `this` as `foo`, which refers to `obj`, allowing us to access `obj.name` successfully.

In strict mode, if you try to access `this` in a regular function that is not called as a method of an object, it will be `undefined` instead of the global object. However, in non-strict mode, it will still refer to the global object. The reason is to prevent accidental modifications to the global object and to encourage better coding practices.

## Explicit binding with call, apply, and bind

JavaScript provides methods like `call()`, `apply()`, and `bind()` to explicitly set the value of `this` when invoking a function.


### Call() function

You can use call() to invoke a function with a specific `this` value and arguments provided individually.

```js [index]
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
const person2 = { name: 'Bob' };

greet.call(person, 'Hi', '!'); // Outputs: "Hi, Alice!"
greet.call(person2, 'Hello', '!'); // Outputs: "Hello, Bob!"
```

### Apply() function

You can use apply() to invoke a function with a specific `this` value and arguments provided as an array.

> Apply is similar to call, but it takes an array of arguments instead of individual arguments.

```js [index]
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
const person2 = { name: 'Bob' };

greet.apply(person, ['Hi', '!']); // Outputs: "Hi, Alice!"
greet.apply(person2, ['Hello', '!']); // Outputs: "Hello, Bob!"
```

### Bind() function

You can use bind() to create a new function with a specific `this` value and optional arguments. The new function can be called later.

```js [index]
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
const person2 = { name: 'Bob' };
const greetAlice = greet.bind(person);
const greetBob = greet.bind(person2);

greetAlice('Hi', '!'); // Outputs: "Hi, Alice!"
greetBob('Hello', '!'); // Outputs: "Hello, Bob!"
```

## The new Keyword (Constructor Functions)

In JavaScript, when a function is invoked with the `new` keyword, it becomes a constructor function. In this context, `this` refers to the newly created object that is being constructed.

```js [index]
function Person(name) {
  this.name = name;
}

const person1 = new Person('Alice');
console.log(person1.name); // Outputs: "Alice"
```

In the example above, when we call `new Person('Alice')`, a new object is created, and `this` inside the `Person` function refers to that new object. The `name` property is assigned to the new object, and we can access it through `person1.name`.

## Event handler

When a function is used as an event handler, `this` refers to the element that received the event.

```js [index]
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // Outputs: the button element that was clicked
});
```


## Summary

- In the global context, `this` refers to the global object (`window` in browsers).
- Inside a regular function, `this` refers to the object that is **calling/invoking** the function.
- Inside an arrow function, `this` is inherited from the surrounding context.
- When a function is invoked with the `new` keyword, `this` refers to the newly created object.
- In event handlers, `this` refers to the element that received the event.
