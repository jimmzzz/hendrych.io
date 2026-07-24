---
title: 'The prototype inheritance in JavaScript'
description: 'The prototype inheritance in JavaScript is a powerful mechanism that allows objects to inherit properties and methods from other objects.'
# image: 'img/blog/animated-landing-page.png'
tags: [ javascript ]
author: 'Tomáš Hendrych'
createdAt: '2026-06-03T18:00:00+01:00'
difficulty: 'beginner'
draft: true
---


- [Introduction](#introduction)
- [What is Prototype Inheritance?](#what-is-prototype-inheritance)
- [Creating Objects](#creating-objects)
- [Prototype Chain](#prototype-chain)
- [Constructor Functions](#constructor-functions)
- [ES6 Classes](#es6-classes)
- [Summary](#summary)


Every time you create an object or array in JavaScript, it comes packed with secret superpowers—methods like `.hasOwnProperty()`, `.map()`, or `.push()`. But where do those methods actually come from?

The answer is **prototypical inheritance**.

Unlike languages like Java or C++ that use strict, class-based blueprints, JavaScript relies on **objects linking to other objects**. Here is a simple guide to how prototypes and inheritance work under the hood.

---

## 1. What is a Prototype?

In JavaScript, almost every object has a hidden, built-in property called its **prototype** (historically referred to as `__proto__`).

Think of a prototype as a **backup plan**. If you ask an object for a property or a method it doesn't have, it doesn't immediately give up and throw an error. Instead, it looks at its prototype to see if *it* has what you're looking for.

### The Prototype Chain
If the first prototype doesn't have it, JavaScript looks at *that* prototype's prototype. This continues up the line until it hits `null` (the ultimate end of the chain). This behavior is called the **prototype chain**.

---

## 2. Seeing it in Action (Code Example)

Let's look at how this works without any complex syntax. We can use `Object.create()` to manually set the prototype of a new object.

```javascript
// 1. Create a base "animal" object
const animal = {
  isAlive: true,
  eat() {
    console.log("Nom nom nom...");
  }
};

// 2. Create a "dog" object that inherits from "animal"
const dog = Object.create(animal);

// 3. Give the dog its own unique properties
dog.bark = function() {
  console.log("Woof!");
};

// --- Testing the Prototype Chain ---

dog.bark(); // Output: "Woof!" (Found directly on the dog object)

dog.eat();  // Output: "Nom nom nom..." (Not on dog, but found on its prototype: animal)

console.log(dog.isAlive); // Output: true (Inherited from animal)
