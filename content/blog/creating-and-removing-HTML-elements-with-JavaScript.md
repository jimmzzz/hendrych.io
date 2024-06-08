---
title: 'Creating and removing HTML elements with JavaScript'
description: 'In my second article in a series dedicated to DOM API, I will focus on adding and removing HTML elements from the Document Object Model (DOM). These actions are the bread and butter for creating…'
image: 'img/blog/green.jpg'
tags: [ HTML, CSS, JavaScript, DOM Manipulation, Beginner friendly ]
author: 'Tomáš Hendrych'
createdAt: '2024-01-26T12:00:00+01:00'
updatedAt: '2024-02-02T12:00:00+01:00'
difficulty: 'beginner'
---

In my second article in a series dedicated to **DOM API**, I will focus on **adding and removing HTML elements from the Document Object Model (DOM).** These actions are the bread and butter for creating modern highly interactive web applications.

The article is again divided into two main sections. The first section is dedicated to some basic theory, how to create and remove HTML elements and which methods are available to us. In the second part, we will together create a super simple application that will be able to create title and subtitle. Set their content and set class attributes on them.

## Theoretical part

The process of displaying a newly created HTML element involves 3 steps:

1. Create element

1. Set Content / Attribute

1. Insert element to the DOM

### Create element

To create HTML elements there is a method called `document.createElement('tagName')`. The tagName parameter can be any valid HTML element e.g. `<h1>` , `<a>` etc. The method returns a new HTML element.

```js
const title = document.createElement('h1');
```

### Set Content / Attribute

So, We have created an element, but what next? Our new element has no content. We can use one of the methods from [my previous article](https://medium.com/@tom.hendrych/a-guide-to-changing-html-content-with-javascript-0bf0495cf5b0). In this example, we will use textContent, but we could potentially use .innerHTML method if we wanted to use the more complex structure with nested elements.

```js
title.textContent = 'Our new H1 element';
title.innerHTML = "Our new <strong>H1 element</strong>"
```

The method .setAttribute(key, value) accepts two arguments. The first argument is key and it can be any valid attribute name. The second parameter as the name suggests set the value to our attribute. If the attribute already exists, the current value will be overridden by the new value.

```js
const button = document.querySelector('button');
button.setAttribute('class', 'button');
```

### Insert element to the DOM

Finally, we must insert our element with content to DOM in order to be visible to our users. There is a several methods that we can use.

We have four possible methods:

1. .appendChild()

1. .append()

1. .prepend()

1. .insertBefore()

The `appendChild()` method and `append()` are fairly similar. Both methods add our new element as a **the last child of theselected parent element**. The `appendChild(element)` accepts a single argument, that we want to insert, while `append(element1, element2, ... elementN)` accepts 1 to N elements. The `append()` method was introduced in ECMAScript 2015, so it has worse browser support than `appendChild()` method, but should be supported in all modern browsers. Here you can compare browser support in [this link](https://caniuse.com/?search=append).

```js
// appendChild() example
const parent = document.getElementById('parentElement');
const child = document.createElement('div');
parent.appendChild(child);

// append() example
const parent = document.getElementById("parentElement");
const child1 = document.createElement('div');
const child2 = document.createElement('span');
parent.append(child1, child2, 'Some text');
```

To insert a new element **at the start of the parent element** we got `prepend()` , this method inserts an element or string before the first child of the specified parent.

```js
const parentElement = document.getElementById('parentElement');
const newElement = document.createElement('p');
newElement.textContent = 'Lorem ipsum';

// Prepend the new element to the parent element
parentElement.prepend(newElement);
```

We can also insert new element before another element. To do, we can use method `.insertBefore(newElement, referenceElement)` . The method accepts two required arguments. The first parameter is new element, which we want to insert. The second parameter is reference element before which we want to insert our new element.

```js
const newElement = document.createElement('p');
newElement.textContent = 'Inserted content';

const referenceElement = document.getElementById('referenceElement');
referenceElement.parentNode.insertBefore(newElement, referenceElement);
```

### Remove element

The process of removing elements from DOM is quite straightforward. We can use one of two methods:

1. .remove()

1. .removeChild()

```js
const elementToRemove = document.getElementById('exampleElement');
elementToRemove.remove()

// .removeChild() example
const elementToRemove = document.getElementById('exampleElement');
const parentElement = elementToRemove.parentNode;
parentElement.removeChild(elementToRemove);
```

With both methods we achieve the same result, but the `element.remove()` method is more modern and concise and requires slightly less code because we do not have to access parentNode to remove his child. On the other hand `.removeChild()` has better browser support, but all modern browsers should support `.remove()` .

## Practical part

In our practical section, we will build a super simple application, which will be able to create a title and subtitle on button click action. Then, We will remove those elements.

This is our final app:

<iframe width="100%" height="300" src="//jsfiddle.net/jimmzzz/qd51gw7L/76/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Let's start with the index.html file. Use the code below as a starting point for our app.

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

Then between body tag, we will add two buttons. One for creating and the second for removing elements. Do not forget to set id attribute accordingly, we will need them later in this tutorial. That should be all HTML for now.

```html
<body>
    <button id="createElement" type="button" class="button button--green">
        Create element
    </button>

    <button id="deleteElement" type="button" class="button button--red">
        Remove element
    </button>
</body>
```

Create styles.css file. All styles that we will need are included in the code below.

```css
* {
    box-sizing: border-box;
}

body {
    background: #111827;
    font-family: "Inter", sans-serif;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    max-width: 850px;
}

.title {
    margin-bottom: 1rem;
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

.button {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
    margin-right: 1rem;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: #ffffff;

    @media (min-width: 640px) {
        width: auto;
    }
}

.button--green {
    background-color: #2ecc71 !important;
}

.button--green:hover {
    background-color: #27ae60 !important;
}

.button--red {
    background-color: #e74c3c !important;
}

.button--red:hover {
    background-color: #c0392b !important;
}
```

Finally, we can start write our Javascript code. So let's create index.js file. First of all, we need to get reference of our buttons. We can use the method getElementById .

```js
const createBtnEl = document.getElementById('createElement');
const deleteBtnEl = document.getElementById('deleteElement');
```

Now, we will create our new function `createElementWithText` which will help us write slightly less code because we want to reuse our code. Our factory function will accept 3 arguments: `tagName` , `textContent` , `className` . The tagName parameter will be used to create the HTML element we want, then we will use textContent parameter to set the content of our element and our last parameter will be used to set the CSS class attribute and help us with the styling of the new element. Then we will return our “prepared” element from the function.

```js
const createBtnEl = document.getElementById('createElement');
const deleteBtnEl = document.getElementById('deleteElement');

// our new factory function
function createElementWithText(tagName, textContent, className) {
  const newElement = document.createElement(tagName);
  newElement.textContent = textContent;
  newElement.setAttribute('class', className);

  return newElement;
}
```

Now, we will add click event listeners to these buttons. So when the user clicks the respective button then the callback function will be called.

```js
const createBtnEl = document.getElementById('createElement');
const deleteBtnEl = document.getElementById('deleteElement');

createBtnEl.addEventListener('click', () => {
  // our code will be here
});

deleteBtnEl.addEventListener('click', () => {
  // our code will be here
});
```

In our `createButtonEl` callback function, we will create title and subTitle and assign them the element created in our function `createElementWithText` . So now we use `append()` method to insert the title and subtitle to the end of the body element.

```js
createBtnEl.addEventListener('click', () => {
  
  const newTitle = createElementWithText('h1', 'new Title', 'title');
  const newSubtitle = createElementWithText(
    'h2',
    'This is a subtitle',
    'subtitle'
 );

  document.body.append(newTitle, newSubtitle);
});
```

If you click on the green button, the title and subtitle should appear on the page.

Let's move to our last missing piece of the puzzle — removing elements. Create the new function `removeElement(tagName)` . Our function accepts only HTML element names. First of all, we need to find the element we want to remove. To do so, we will find the element with method querySelector() . Then we check if we found our desired element. If not, then we will print the message into the console and stop the execution of the rest of the code in our function.

If we find the element, then we will call the method `remove()` on itself.

```js
function removeElement(tagName) {
  const elementToRemove = document.querySelector(tagName);

  if (!elementToRemove) {
    console.warn(`No element ${tagName} found`);
    return;
  }

  elementToRemove.remove(elementToRemove);
}
```

Then will call our function `removeElement` with arguments `h1` and `h2` in order to remove title and subtitle .

I should note that finding elements by their tag name is not the best idea because the webpage can contain many instances of the same element and the method querySelector() finds and returns only first instance of the searched element. A better idea would be to give them some unique identifier e.g. id=”title” attribute. But for our simple app is it enough.

```js
deleteBtnEl.addEventListener('click', () => {
  removeElement('h1');
  removeElement('h2');
});
```

That is it. Try to click on the green button and then click on the red button. The title , and subtitle should appear on the green button click and disappear on the red button click.

<iframe width="100%" height="300" src="//jsfiddle.net/jimmzzz/qd51gw7L/76/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

And now we have completed our app 🎉  
Let's have a coffee :)

## Conclusion

In this tutorial we have learned the following:

* How to create an HTML element with the method `.createElement()`

* How to insert a new element to DOM

* methods `.append()` and `.appendChild()`add an element as a **LAST** child of a respective parent element

* method `.prepend()` adds an element as a **FIRST** child of the respective parent

* `.insertBefore()` allows to insert element before another element

* To remove an element, we have two methods `.remove()` and `.removeChild()`

**Thank you for reading** ❤️

<hr>

# Links:

Originally posted on [Medium.com](https://medium.com/@tom.hendrych/creating-and-removing-html-elements-with-javascript-372bbd4cfdcc)

final code — [https://github.com/jimmzzz/js-basics/tree/main/create-remove-element](https://github.com/jimmzzz/js-basics/tree/main/create-remove-element)  

[https://www.instagram.com/frontendblond/](https://www.instagram.com/frontendblond/)  

[https://www.linkedin.com/in/tomas-hendrych-cz/](https://www.linkedin.com/in/tomas-hendrych-cz/)  

[https://www.buymeacoffee.com/tomas.hendrych](https://www.buymeacoffee.com/tomas.hendrych)  


