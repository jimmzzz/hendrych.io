---
title: 'Animated landing page with gradient overlay'
description: 'Learn techniques for applying background image overlays for improved text readability and applying the color gradient over the image'
image: 'img/blog/animated-landing-page.png'
tags: [ HTML, CSS, JavaScript, Animations ]
author: 'Tomáš Hendrych'
createdAt: '2024-07-01T18:00:00+01:00'
difficulty: 'beginner'
---

In this tutorial we going to build animated landing page which will dynamically change the content base on user interaction. The tutorial use only plain HTML, CSS, JavaScript, so no dependencies and frameworks are needed just your favorite IDE / text editor and passion & time to learn something new.

Our landing page will be a fictional project dedicated to the majestic animals of the African savannas. 
Who doesn't like animals, right? 🦏 🦒

Feel free to adjust this project to your preferences.
Unleash your creativity and adapt it to your needs, whether it be Marvel/DC superheroes, Pokémon, your favorite sports stars, or even for presenting products.

---

[**Final result here**](https://jimmzzz.github.io/projects/animated-landing-page-finished/index.html){:target="_blank"}

---


### Tutorial structure

In the first section, we will set our background image and apply an overlay filter to it. 
This filter will decrease the brightness of the image, enabling us to place text on it with improved contrast and readability. 
By doing this, we ensure that the text stands out clearly against the background, making the content more accessible and visually appealing.
We also add gradient to make our page even more attractive.

The second section is dedicated to our "jumbotron" navigation, which serves as the prominent navigation element on the webpage.
This section is designed to draw  user's attention, ensuring that they focus on the most important content.
By utilizing a jumbotron, we can highlight important content, announcements, or CTA (call to action), ensuring they are immediately visible to visitors.
This enhances the overall user experience by making navigation intuitive and visually engaging.

In the final section, we will create an article section that slides in upon user interaction. 
This dynamic feature will enhance user engagement by providing an interactive and visually appealing way to present content. 
Sliding animations can capture attention and make the browsing experience more enjoyable.

## Table of content

1.  Background image with overlay filter and gradient
2.  Jumbotron navigation
3.  Article section

## Setup

The starting point for this mini project can be found in this [Github repo](https://github.com/jimmzzz/jimmzzz.github.io/tree/main) in the "projects" folder, where you can also find the final code for this tutorial.


Before we start coding, let's set up our really simple project.
We will need one file for our HTML markup called `index.html`, a CSS file, and a JavaScript file. 
First, we will create the HTML file, where we will link our CSS file `styles.css` and create and import our JavaScript file `index.js`, which will be empty for now. Feel free to copy and paste this.


I would like to point out the `<link rel="preload" ... />` tag in the header section. 
This tells the browser to load resources (in our case images) as soon as possible, before they are found in the DOM or required by JavaScript. 
As a result, the images will be ready immediately when they are needed by JavaScript, which will be handy later in our tutorial.

> TIP: Learn more about preloading in [Google dev (preloading)](https://web.dev/articles/preload-responsive-images){:target="_blank"}


```html [index]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      rel="stylesheet"
    />
    <link rel="preload" href="./img/rhino.jpg" as="image" />
    <link rel="preload" href="./img/zebra.jpg" as="image" />
    <link rel="preload" href="./img/lion.jpg" as="image" />
    <link rel="stylesheet" href="./styles.css" />
    <script src="./index.js" defer></script>
    <title>Animated landing page</title>
  </head>

  <body>
      <!-- our code will be here -->
  </body>
</html>
```

In the root of our directory create `styles.css` file.
We will import a font called **Poppins** from [Google fonts](https://fonts.google.com/specimen/Poppins?query=poppins) and set CSS variable for the text color and our initial background image. Nothing extra special going on here.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:root {
    --text-primary: white;
    --background-image: url('./img/rhino.jpg');
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}
```

---

## Background image

First, we will start with our background. We want our background image to be below our content. To achieve this, we will add a `<main>` element with the class `.content`.

We will compose our background in layers. If you are familiar with graphical software such as Adobe Photoshop, this follows the same concept, and we will achieve this using z-index. 
We need to do this in order to apply a **grayscale filter** and a **gradient effect**.

First, we will declare styles for our bottom layer using the pseudo-element `.content:before`. 
The important part is to set it to a lower `z-index` than the following layers. 
We will also set the background image and some other background properties to center our image and cover the whole page. 
The interesting part is `filter: grayscale(100%)`, which turns our image black and white.

> A pseudo-element in CSS is a keyword added to a selector that lets you style a specific part of the selected element. Common examples include ::before and ::after, which allow you to insert content before or after the content of an element, respectively. These are useful for adding decorative content or additional styling without altering the HTML structure. - (chatgpt - definition)

```html [index]
<body>
    <main class="content">
      <!-- content will be here -->
    </main>
</body>
```


```css [styles]
.content:before {
    position: fixed;
    content: "";
    left: 0;
    right: 0;
    z-index: -2;
    
    display: block;
    width: 100vw;
    height: 100vh;

    background-image: var(--background-image);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    transition: background-image 1s 0.2s ease-in-out;
}
```

As a next step we will set our gradient. At the top of our `styles.css` file declare following CSS variables for our gradient.

```css [styles]
:root {
    --text-primary: white;
    --background-image: url('./img/rhino.jpg');

    --gradient-color-first: rgba(0, 0, 0, 0.7);
    --gradient-color-second: rgba(0, 0, 0, 0.5);
}
```

Next, we need to set the `.content::after` pseudo-element. Our gradient will go from the top to the bottom, and for now, we will set a black gradient. Later on, I will show you how to modify the gradient. The gradient helps improve the readability of the white text that we will add later.

> TIP: If you ever need place some text on a image and text is hard to read then gradient or overlay are great tools to add some contrast.

```css [styles]
.content:after {
    position: fixed;
    content: "";
    left: 0;
    top: 0;
    z-index: -1;
    
    display: block;
    width: 100vw;
    height: 100vh;

    background: linear-gradient(
        var(--gradient-color-first),
        var(--gradient-color-second)
    );
}
```
And last but not least, we have to define our final layer, which will be on top and thus have the highest `z-index`. In our case we set `z-index: 0`. Now we should see black & white background image with rhinos.

```css [styles]
.content {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    color: var(--text-primary);
}
```

---

### Customize your gradient - optional step

This step is optional. We will customize the gradient of our background image. You will see how different colors can dramatically change the overall feeling and atmosphere of the presented content.

In the snippet below, you can find preset colors, but feel free to choose the color you prefer. 
However, I strongly recommend picking a saturated color and keeping the **alpha** (opacity) between **0.5 and 0.7** to preserve contrast and readability of the content.

> rgba(red, green, blue, alpha)

All you need to do to apply your custom gradient is to override the CSS variable:

`--gradient-color-second`.

**Here you can see some gradients for inspiration**

![image info](/img/blog/animated-landing-page-grid.png)

```css [styles]
:root {
    --text-primary: white;
    --background-image: url('./img/rhino.jpg');
    --gradient-color-first: rgba(0, 0, 0, 0.7);
    --gradient-color-second: rgba(0, 0, 0, 0.7);

    // color presets - feel free to pick & try
    --gradient-color-second: rgba(0, 204, 255, 0.7); // 1. cyan
    --gradient-color-second: rgba(255, 0, 200, 0.7); // 2. magenta
    --gradient-color-second: rgba(255, 247, 0, 0.7); // 3. yellow
    --gradient-color-second: rgba(0, 255, 195, 0.7); // 4. green
    --gradient-color-second: rgba(255, 136, 0, 0.7); // 5. orange
    --gradient-color-second: rgba(0, 136, 255, 0.7); // 6. blue
}
```

---

## Jumbotron navigation

Let's move to the second main section called **jumbotron navigation**. 
A "jumbotron" is a large, prominent component used in web design. It is typically designed to grab the user's attention.

In our case, the jumbotron navigation will contain animal names, and the user will be able to switch between active items. When the user clicks an animal name, we will switch the currently selected animal and also change the page background to the respective animal.

First of all, we will create `.grid-container` nested inside the `.content`. The container will contain two equally sized part `.left` and `.right`. On the left side there will be the jumbotron navigation and on the right side, there will be our short article about the animal.

If you look at our navigation items markup you will see, there is defined `id` attribute and custom attributes `data-index`. We will use both attributes in our javascript to access correct elements.

```html [index]
<main class="content">
  <div class="grid-container">

    <div class="left">
      <nav class="jumbo-nav">
          <a class="jumbo-nav__item jumbo-nav__item--active" data-index="0" id="rhino">Rhino</a>
          <a class="jumbo-nav__item" data-index="1" id="zebra">Zebra</a>
          <a class="jumbo-nav__item" data-index="2" id="lion">Lion</a>
      </nav>
    </div>

    <div class="right">
      <!-- article text -->
    </div>

  <div>
</main>
```

```css [styles]
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    margin-top: 190px;
    padding: 0 20px;
    max-width: 1230px;
}
```

Finally, we are going to style our navigation. To display our navigation items from top to bottom, we will define our parent element (flex container) as `.jumbo-nav`. 
We will set the opacity of the items to **0.3**, creating a visual inactive state where only the selected navigation item will be dominant.

```css [styles]
.jumbo-nav {
  display: inline-flex;
  flex-direction: column;
}
  
.jumbo-nav__item {
  display: inline-block;
  align-self: flex-start;
  font-size: 100px;
  font-weight: bold;
  color: white;
  opacity: 0.3;
  cursor: pointer;
}

.jumbo-nav__item--active {
  opacity: 1;
}
```

We want to preserve our selected item on hover, so we cannot use a pseudo-class; instead, we have to use JavaScript to handle this. Essentially, we will add an active class when we mouse over a new navigation item and remove the active class from the previous element.

First, we need to query all jumbotron navigation items.

```js [index]
// query all nav items
const navItems = document.querySelectorAll('.jumbo-nav__item');
const navItemActiveClass = 'jumbo-nav__item--active' 

// to track our currently selected item
let selectedItemIndex = 0;
```

Now we are going to create our function that is responsible for adding and removing the active class from the navigation items. We have to iterate over our list of navigation items and attach an event listener to each element. In other words, the function will be called on the `mouseover` event every time the user hovers over a navigation item.

```js [index]
function onMouseOver(e) {
  const currentlyHoveredIndex = e.target.dataset.index;
  const currentItem = navItems[currentlyHoveredIndex];

  // remove active class from previous item
  if (currentlyHoveredIndex !== selectedItemIndex) {
    const selectedItem = navItems[selectedItemIndex];
    if (selectedItem) {
      selectedItem.classList.remove(navItemActiveClass);
    }
  }

  // set active class on new item
  if (currentItem) {
    currentItem.classList.add(navItemActiveClass);
    selectedItemIndex = currentlyHoveredIndex;
  }
}

// attach event lister to all navigation items
navItems.forEach((element) => {
    element.addEventListener('mouseover', (e) => onMouseOver(e));
});
```


### Navigation transition

Now we have a working navigation that highlights the selected item, but if we move the mouse to another item, it selects the new one. This works fine, but the effect is a bit too blinking and unnatural. We will add a transition to make it more appealing to users. 

At the bottom of our existing `.jumbo-nav__item` and `.jumbo-nav__item--active` , we will add the following code:

```css [styles]  
.jumbo-nav__item {
  ...
  transition: all 0.5s 0.3s ease;
}

.jumbo-nav__item--active {
  ...
  transform: scale(1.2) translateX(7.5%);
}
```
Let's break down the code above. We will apply a transition to all properties, making our transition `0.5s` long and delaying it by `0.3s`. This will ensure a natural-looking transition from one state to another. For our active state, which is applied on hover, we want to make the font bigger and more dominant. To do that, we will set `transform: scale(1.2) translateX(7.5%)`.

It's amazing how just a few lines of CSS (transitions and transforms) can improve the overall feel of the feature, isn't it?

### Background change

Before we move to the last main section, we will add feature that will change the background to the respective animal. We will create new function called `setBackgroundImage`.

There is a little catch. Because we defined our background-image property on the pseudo-element `.content::before` and pseudo-elements do not exist in the DOM, there is no direct way to change it via JavaScript. However, what we can do is select the real element with the class `.content` that contains the pseudo-element with the background image declaration. We can then change the CSS variable `--background-image` using `element.style.setProperty(name, value)` to a new value — **imageId**, which is the animal name.

```js [index]
function setBackgroundImage(imageId) {
  const elementWithBackgroundImage = document.querySelector('.content')
  elementWithBackgroundImage
    .style.setProperty('--background-image', `url('./img/${imageId}.jpg')`)
}
```

Finally, we will call this function at the bottom of the existing `onMouseOver` function and pass `e.target.id` — the animal name taken from the navigation element—as an argument. Now, if you hover over a navigation item, the background should change dynamically, and we have finished our second main section. 🎉🎉🎉

```js [index]
function onMouseOver(e) {
  // previous code ommited

  setBackgroundImage(e.target.id);
}
```

---

## Article section

We can start working on the last main section of this tutorial. We will create an article section that displays a heading and a few paragraphs about the selected animal. 
Additionally, we will update this section as the user mouses over different navigation elements. 
In other words, the UI will be updated accordingly based on user interaction.

Lets move to our HTML structure. Inside our `.grid-container` we already got wrapping element with class `.right` and here we place our article. Our HTML for this section consist of wrappping `<article>` element which contains a nested heading element and a few paragraphs. Feel free to copy this with placeholder text.

```html [index]
<div class="right">

  <!-- Rhino -->
  <article class="article" data-index="0">
    <h1 class="article-title">The ancient colossus</h1>
    <p class="article-paragraph">
      Rhinos, short for rhinoceroses, are large, herbivorous mammals
      known for their distinctive horns and thick skin. These
      majestic creatures are found in Africa and Asia, with five
      species: the white, black, Indian, Javan, and Sumatran rhinos.
      Each species has unique characteristics and habitats, ranging
      from savannas and grasslands to dense tropical forests.
    </p>
    <p class="article-paragraph">
      Despite their formidable size and strength, rhinos are
      surprisingly agile, capable of running at impressive speeds
      when threatened. Their horns, made of keratin, are used for
      defense, digging for water, and breaking branches for food.
    </p>
  </article>

  <!-- Zebra -->
  <article class="article hidden" data-index="1">
    <h1 class="article-title">
      The Guardians of the African Grasslands
    </h1>
    <p class="article-paragraph">
      Zebras are distinctive members of the equid family, known for
      their unique black-and-white striped coats. Native to Africa,
      zebras primarily inhabit savannas, grasslands, and mountainous
      regions. Their stripes serve multiple purposes, including
      camouflage, confusing predators, and regulating body
      temperature. Each zebra's stripe pattern is unique, much like
      human fingerprints
    </p>
    <p class="article-paragraph">
      Despite their adaptability, zebras face several threats,
      including habitat loss, hunting, and competition with
      livestock for resources. The conversion of their natural
      habitats into agricultural land reduces their grazing areas
      and water sources.
    </p>
  </article>

  <!-- Lion -->
  <article class="article hidden" data-index="2">
    <h1 class="article-title">The king of the jungle</h1>
    <p class="article-paragraph">
      Lions, known as the "king of the jungle," are majestic big
      cats native to Africa and parts of Asia. These social animals
      are unique among big cats for their pride-based structure,
      with groups typically consisting of several females, their
      cubs, and a few males. Male lions are recognizable by their
      impressive manes, which can vary in color from blond to black
      and symbolize strength and dominance.
    </p>
    <p class="article-paragraph">
      Despite their iconic status, lions face significant threats in
      the wild, primarily due to habitat loss, human-wildlife
      conflict, and poaching. The reduction of their natural
      habitats to agriculture and urban development has led to
      decreased prey availability and increased encounters with
      humans.
    </p>
  </article>
<div>
```

We also need to define some styles to make it more visually interesting, but nothing extraordinary is happening in the CSS code below. At the bottom, there is a utility `.hidden` class which we will use to hide other articles, so only one will be visible at a time. There is also a transition defined on `.article` that will create a nice slide-in effect with the new article from the right side.

```css [styles]
.article {
  color: var(--text-primary);
  max-width: 450px;
  position: absolute;
  transform: translateX(0);
  transition: all 0.6s 0.3s ease-in-out;
  opacity: 1;
  z-index: 3;
}

.article-title {
  font-weight: 600;
  font-size: 42px;
  letter-spacing: -2px;
  margin-bottom: 0;
}

.article-paragraph {
  font-size: 16px;
  line-height: 170%;
  opacity: 0.7;
  font-weight: 300;
}

.hidden {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
}
```

Now we add last missing piece of mosaic - change the article section when the user hovers over the navigation item. All we need to is get reference of our 3 articles in HTML with `querySelectorAll()`. Do not forget to place it at the top of our JavaScript file.

```js [index]
const articles = document.querySelectorAll('.article');
```

And now we have to update our `onMouseOver` function with the following code, which will remove hidden class from active item and set hidden class on inactive item.

```js [index]
if (articles[selectedItemIndex]) {
  articles[currentlyHoveredIndex].classList.remove('hidden');
  articles[selectedItemIndex].classList.add('hidden');
}
```

And we place the code above to inside the if statment which we used before for removing active class from jumbotron navigation.

Here is our final `onMouseOver` function

```js [index]
function onMouseOver(e) {
    const currentlyHoveredIndex = e.target.dataset.index;
    const currentItem = navItems[currentlyHoveredIndex];
  
    // remove active class from previous item
    if (currentlyHoveredIndex !== selectedItemIndex) {
      const selectedItem = navItems[selectedItemIndex];
      if (selectedItem) {
        selectedItem.classList.remove(navItemActiveClass);
      }

      if (articles[selectedItemIndex]) {
        articles[currentlyHoveredIndex].classList.remove('hidden');
        articles[selectedItemIndex].classList.add('hidden');
      }
    }
  
    // set active class on new item
    if (currentItem) {
      currentItem.classList.add(navItemActiveClass);
      selectedItemIndex = currentlyHoveredIndex;
    }

    setBackgroundImage(e.target.id);
}
```


## Conclusion

In this tutorial, we focused on enhancing the visual appeal and user experience of our webpage through several key design elements. We started by setting a background image with an overlay filter to decrease its brightness, ensuring that any text placed on it stands out clearly and remains easily readable. This approach improves content accessibility and visual clarity. 

Next, we designed a prominent "jumbotron" navigation element to draw users' attention to important content, announcements, or calls to action, making the navigation intuitive and engaging. 

Finally, we added a dynamic article section that slides in upon user interaction, providing an interactive and visually appealing way to present content. These elements work together to create a visually striking and user-friendly webpage, enhancing both readability and user engagement.