---
title: 'Guide to changing HTML content with javascript'
description: 'This article is focused on updating the content of webpage with the help of JavaScript. We are going to manipulate Document Object Model (DOM)**, which represents the structure of an HTML document.'
image: 'img/blog/dom-1.png'
tags: [HTML, CSS, JavaScript, DOM Manipulation, Beginner friendly]
author: 'Tomáš Hendrych'
createdAt: '2023-12-29T09:00:00+01:00'
updatedAt: '2023-12-29T09:00:00+01:00'
---

This article is focused on updating the content of webpage with the help of JavaScript. We are going to manipulate **Document Object Model (DOM)**, which represents the structure of an HTML document.

The tutorial is composed of two main sections. In the first section, we will look at some basic theories, which properties we can use to **get(read)** and **set (write)** content of HTML elements. In the second section we will apply our newly acquired knowledge and together we will build a really simple web app. The app will be able to change the name of a user based on his input typed in the input field.

## Changing content of webpage — Theory

To change the content of a webpage we need to manipulate DOM.

DOM API offers several ways how to change content dynamically:

1. innerHTML

1. textContent

1. innerText

### innerHTML

Allows you to get or set the **HTML content** of an element. It can include nested elements.

more info : **[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)**

```js
document.getElementById("myElement").innerHTML = "<p>New Content<p>";
```

### textContent

Sets or returns the text content of an element, excluding HTML tags. Returns all text, whether it’s rendered on screen or not.

more info: **[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)**

```js
document.getElementById("myElement").textContent = "New Text Content";
```

### innerText

Sets or returns the text content of an element, excluding HTML tags. Returns only text visible to a user. So it will not return e.g. text hidden by CSS.

more info: **[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)**

```js
document.getElementById("myElement").innerText = "New Text Content";
```

## Practical part — Application

In this section, we are going to build a simple application. As we mention already at the beginning of our tutorial, the application will be able to change the name of a user based on typed input. Our application will consist of a subtitle, title, input field and button.

Here you can see the final mini app:

<iframe width="100%" height="450" src="//jsfiddle.net/jimmzzz/uhyjx9gL/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Let’s break down our task into smaller pieces.

**What we need to do:**

1. Get references for our HTML elements

1. Get the value typed in the input field

1. Add logic handling by click on a button

1. Prevent user from updating text with an empty string

1. Clear input value

Let’s transform our requirements into code 👋🏾

We start with some HTML boilerplate. So let's create index.html file and write or paste the following code. There nothing that much interesting, just a basic "skeleton" of our HTML. We link our file styles.css in the head section, that does not exist yet. Then we link [TailwindCSS](https://tailwindcss.com/) which helps us with styling our app and we also link our file index.js with javascript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="index.js" defer></script>
    <title>Changing page content</title>
  </head>
  <body>
   <!-- our HTML will be here-->
  </body>
</html>
```

Start with adding code to in our body, firstly add `<h1>` is one too! and `<h2>` that will display the caption and our name.

Then we add `<form>` where we nest `<label>` , `<input>`and `<button>` . Add class attributes for styling.

Last but not least, we must add id attributes to our HTML elements. Then we will be able to access exactly these elements later in the tutorial. We will name them name , inputName , changeButton .

```html
<main>
   <h2 class="subtitle">My name is</h2>
   <h1 id="name" class="title">Tomáš Hendrych</h1>
   <form class="form">
      <div class="form-wrapper">
         <label for="inputName" class="form-label"> Name </label>
         <input
            type="text"
            id="inputName"
            class="form-input"
            placeholder="Enter your name and click 'Change name'"
            />
      </div>
      <button id="changeButton" type="button" class="changeButton">
      Change name
      </button>
   </form>
</main>
```

Now add some basic styles in our styles.css. Nothing extra interesting and unusual going there, so feel free to copy/paste.

```css
* {
  box-sizing: border-box;
}

body {
  background: #111827;
  font-family: 'Inter', sans-serif;
}

main {
  margin: 0 auto;
  padding: 3rem 1.5rem;
  max-width: 650px;
}

.title {
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 800;
  color: #ffffff;
}

.subtitle {
  font-size: 1.5rem;
  line-height: 2rem;
  color: #ffffff;
  margin-bottom: 12px;
}

.form {
  margin: 0 auto;
}

.form-wrapper {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #fff;
}

.form-input {
  display: block;
  padding: 0.625rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #d1d5db;
  width: 50%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #111827;
  background-color: #f9fafb;
}

.changeButton {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  background-color: #6d28d9 !important;

  @media (min-width: 640px) {
    width: auto;
  }
}

.changeButton:hover {
  background-color: #5b21b6;
}
```

### App logic

Let’s code our the most interesting part of our app! First of all, we need to create file index.js where we going to write application logic.

### Get references for our HTML elements

Firstly, we need to get references for our HTML elements. We will get our elements by ID attribute. To do so, we use the method .getElementById.

```js
const nameEl = document.getElementById('name');
const inputEl = document.getElementById('inputName');
const btnEl = document.getElementById('changeButton');
```

### Button click logic

Secondly, we need to attach an event listener to our button-triggering function, which changes our name to input value once a user clicks the button. In our callback function (second parameter in addEventListener function), we store the value of the input element in variable inputValue and then we will assign this value to our element holding name (nameEl). To change text content we will use the property textContent.

The following statement sets out the text content of the name to our input value:
`nameEl.textContent = inputValue`

```js
const nameEl = document.getElementById('name');
const inputEl = document.getElementById('inputName');
const btnEl = document.getElementById('changeButton');

// Logic handling click on button
btnEl.addEventListener('click', () => {
  const inputValue = inputEl.value;
  nameEl.textContent = inputValue;
});
```

Now our app should be working !!! 🎉

Let's add some additional features.

### Clearing input

Would not be fine to clear input after clicking and changing title content? Let’s do that. Actually, it is very easy, we just need to set:

```js
inputValue.value = ''
```

Translated in human language means that we need to set the input value to "nothing" also known as an empty string. And add it to the penultimate line of our previous code.

### Prevent user from updating text with an empty string

We also need to prevent a user from updating name with empty string. To do so, we need to add condition checking if there is no value, if so then pop up the alert window and return from the function. Thereturn keyword is important there, it will leave function and stop the execution of the code block below, which is responsible for setting the new value of the name.

```js
//1.get element references
const nameEl = document.getElementById('name');
const inputEl = document.getElementById('inputName');
const btnEl = document.getElementById('changeButton');

// 2.add logic triggered when button is clicked
btnEl.addEventListener('click', () => {
  const inputValue = inputEl.value;

  // 4. prevent user form updating with empty string
  if (!inputValue) {
    alert('Input is empty, please enter your name');
    return;
  }

  nameEl.textContent = inputValue;
  // 3. clearing input
  inputEl.value = '';
});
```

**Here is our final code and preview:**

<iframe width="100%" height="300" src="//jsfiddle.net/jimmzzz/uhyjx9gL/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Conclusion

In this tutorial we have learnt following:

* How to get and set content of HTML element with properties
– innerHTML
_ textContent
– innerText

* How to get the value from the input element by using property .value

* Set the new value to text content of HTML element

**Thank you for reading** ❤️

<hr>




# Links:

Originally posted on [Medium.com](https://medium.com/@tom.hendrych/a-guide-to-changing-html-content-with-javascript-0bf0495cf5b0)

final code — [https://github.com/jimmzzz/js-basics/tree/main/changing-page-content](https://github.com/jimmzzz/js-basics/tree/main/changing-page-content)

[https://www.instagram.com/frontendblond/](https://www.instagram.com/frontendblond/)  

[https://www.linkedin.com/in/tomas-hendrych-cz/](https://www.linkedin.com/in/tomas-hendrych-cz/)  

[https://www.buymeacoffee.com/tomas.hendrych](https://www.buymeacoffee.com/tomas.hendrych)  