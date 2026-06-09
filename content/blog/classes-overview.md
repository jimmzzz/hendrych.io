---
title: 'Classes overview'
description: 'Learn about JavaScript classes, their syntax, and how to use them effectively.'
# image: 'img/blog/animated-landing-page.png'
tags: [ JavaScript ]
author: 'Tomáš Hendrych'
createdAt: '2026-06-02T18:00:00+01:00'
difficulty: 'beginner'
---

- [What is a Class?](#what-is-a-class)
- [Class Definition](#class-definition)
- [Public and Private Fields](#public-and-private-fields)
- [Static Methods and Properties](#static-methods-and-properties)
- [Inheritance](#inheritance)
- [Super Keyword](#super-keyword)
- [Getters and Setters](#getters-and-setters)
- [Summary](#summary)

## What is a Class?

In JavaScript, a class is a blueprint for creating objects with specific properties and methods. It provides a way to define the structure and behavior of objects in a more organized and reusable manner. Classes were introduced in ECMAScript 2015 (ES6) as syntactic sugar over JavaScript's existing prototype-based inheritance.

## Class Definition

In JavaScript, you can define a class using the `class` keyword. A class is a blueprint for creating objects with specific properties and methods.
To create an instance of a class, you use the `new` keyword followed by the class name and any required arguments for the constructor.

```js [index]
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Outputs: "Hello, my name is Alice and I am 30 years old."
```

## Public and Private Fields

In JavaScript, you can define public and private fields in a class. Public fields are accessible from outside the class, while private fields are only accessible within the class.
The syntax for defining private fields is to prefix the field name with a `#` symbol. Private fields cannot be accessed or modified from outside the class, providing encapsulation and data hiding.

```js [index]
class Person {
  #privateField; // Private field
  publicField; // Public field
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#privateField = 'This is a private field';
    this.publicField = 'This is a public field';
  }
}

const person1 = new Person('Alice', 30);
console.log(person1.publicField); // Outputs: "This is a public field"
console.log(person1.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
```

## Static Methods and Properties

Static methods and properties are defined on the class itself, rather than on instances of the class. They are useful for utility functions or properties that are related to the class but not specific to any instance.

```js [index]
class MathUtils {
  static PI = 3.14159;
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.PI); // Outputs: 3.14159
console.log(MathUtils.add(5, 3)); // Outputs: 8
```

## Inheritance

Inheritance allows you to create a new class that is a child of an existing class. The child class inherits properties and methods from the parent class, and can also have its own properties and methods.

```js [index]
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const dog1 = new Dog('Buddy');
dog1.speak(); // Outputs: "Buddy barks."
dog1.bark(); // Outputs: "Buddy says Woof!"
```

## Super Keyword

The `super` keyword is used in a child class to call the constructor or methods of the parent class. This is useful for initializing properties inherited from the parent class or for extending the functionality of inherited methods.

- Super parentheses syntax allows you to call the parent class constructor
- Super dot syntax allows you to call methods from the parent class

```js [index]
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Outputs: "Buddy makes a sound." followed by "Buddy barks."
```
## Getters and Setters

Getters and setters are special methods that allow you to define how to access and modify the properties of a class. They provide a way to control the behavior of property access and assignment.

```js [index]
class Person {
  name;

  constructor(name, age) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // Outputs: "Alice"
person1.name = 'Bob';
console.log(person1.name); // Outputs: "Bob"
```

## Summary

- JavaScript classes provide a way to create objects with specific properties and methods using the `class` keyword.
- Public fields are accessible from outside the class, while private fields (prefixed with `#`) are only accessible within the class.
- Static methods and properties are defined on the class itself and are useful for utility functions or properties that are related to the class but not specific to any instance.
- Inheritance allows you to create a new class that is a child of an existing class, inheriting properties and methods while also allowing for additional properties and methods.
- The `super` keyword is used in a child class to call the constructor or methods of the parent class, enabling you to initialize inherited properties or extend inherited methods.
- Getters and setters provide a way to control the behavior of property access and assignment, allowing you to define custom logic for getting and setting property values.