---
title: The scroll indicator
image: img/blog/scroll-indicator.png
description: Discover how urban gardening can beautify city spaces and provide sustainable food sources.
createdAt: '2024-03-01T12:00:00+01:00'
tags:
  - HTML
  - CSS
  - JAVASCRIPT
---

In this tutorial, We will build the **scroll indicator** AKA **progress bar** in the header. The indicator will show how many percentage of the page has been scrolled by a user. You may notice this feature on some blogging platforms or personal blogs. It is a subtle but effective way how to notify users about their scrolling progression. Oftentimes, also used to indicate the loading of data from API.

### **Final result:**

<iframe src="https://codesandbox.io/embed/njvtkn?view=preview&module=%2Fsrc%2Fstyles.css"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="scroll-indicator"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

We are going to build two components:

* header

* scroll indicator (progress bar)

### Setup

But before we start to implement these two components we need to create some basic HTML structure. We will create a few headings and paragraphs to make our page long enough to be scrollable.
> **Small tip:** If need to generate some dummy text (lorem ipsum), most of the modern IDEs (VS code, idea, …) have got built-in feature or extension called [**Emmet](https://emmet.io/). **The Emmet offers a lot of features for generating boilerplate HTML and CSS. For generating dummy text in the HTML file just write “**lorem”** and press the tab and random dummy text magically appears. Or you can even specify the number of words with e.g. “**lorem250**”.

```html [index] {4-6,7} meta-info=val
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
    <script src="index.js" defer></script>
    <title>The header scroll indicator</title>
  </head>

  <body>
    <!-- Code for navigation -->

    <!-- end of code for navigation -->

    <main class="main-content container">
      <h1>The header scroll indicator - tutorial</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
        dignissimos deleniti, sunt provident vitae non explicabo aspernatur
        ullam quidem soluta laboriosam doloremque beatae delectus aliquid magnam
        laborum tempore fuga! Numquam, harum nemo, qui est quidem impedit, a
        perspiciatis doloribus magnam ipsam odio. Laboriosam iste eos aut,
        eligendi maxime expedita sed? Ex molestiae accusantium et voluptatum
        temporibus autem ipsum tempore laudantium explicabo, aut voluptate
        delectus, itaque consequatur esse sit quia quod velit. Libero id autem
        molestias fugit doloribus! Dolores cumque fugit numquam repellendus
        voluptates, necessitatibus velit perspiciatis nam. Placeat eaque quidem
        minus fugiat nihil hic minima voluptate molestias excepturi. Animi
        itaque cumque adipisci cum impedit eaque doloribus enim officia
        consectetur dolore, ex a dicta expedita corporis nihil, repudiandae est
        earum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam
        eveniet maxime temporibus commodi? Neque adipisci voluptates saepe illo
        reiciendis.
      </p>
      <p>
        molestias fugit doloribus! Dolores cumque fugit numquam repellendus
        voluptates, necessitatibus velit perspiciatis nam. Placeat eaque quidem
        minus fugiat nihil hic minima voluptate molestias excepturi. Animi
        itaque cumque adipisci cum impedit eaque doloribus enim officia
        consectetur dolore, ex a dicta expedita corporis nihil, repudiandae est
        earum.
      </p>
    </main>
  </body>
</html>
```

The code above will be are starting point for our HTML structure. I also imported CSS normalize.
> [**Normalize.css](https://github.com/necolas/normalize.css/) **makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

Then we will create our CSS file with some starting CSS declarations. On the first line, We import font called “**Poppins**” from** [fonts.google.com](https://fonts.google.com/)** . Feel free to copy & paste the code below, which contains just really basic styling rules.

```css [styles]
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:root {
  --header-bg-color: #ecf0f1;
  --primary-color: #2c3e50;
}

body {
  font-family: 'Poppins', sans-serif;
}

p {
  line-height: 150%;
  margin-bottom: 3rem;
}

.container {
  margin: 0 auto;
  max-width: 940px;
}

.main-content {
  display: block;
  margin-top: 120px;
  /* line below is important to simulate really long page and display scrollbar */
  min-height: 5000px;
}
```

## The header

Let's build our header component. There is the important prerequisite to make this whole feature work. The prerequisite is that our header must a have position **fixed**. In another word the navigation bar is always visible to a user in all circumstances.

First of all, we will create the HTML structure of our header, all will be wrapped in the nav element. Then we create the wrapper element, that will hold two sides. The left side will include the **logo** and **company** **name. **The right side will be dedicated to page links.

```html [index]
<nav class="header">
   <div class="header__wrapper container">
      <h2 class="header__left">
         <img
            width="40"
            height="40"
            src="https://www.reshot.com/preview-assets/icons/GCE47HR9MW/hop-GCE47HR9MW.svg"
            />
         Company name
      </h2>
      <div class="header__right">
         <a class="header__link" href="#home">Home</a>
         <a class="header__link" href="#contact">Contact</a>
         <a class="header__link" href="#about">About</a>
      </div>
   </div>
   <!-- Code for scroll indicator will be later here -->
</nav>
```

Now, we need to style our header. The most important thing is in .header class declaration. As I already mentioned, the position must be set to **fixed **and the top property set to **0**.

```css [styles]
/* HEADER styles */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--header-bg-color);
  height: 70px;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
}

.header__left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.header__right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header__link {
  color: var(--primary-color);
  text-decoration: none;
}
```

## The scroll indicator (progress bar)

Our scroll indicator component will be placed directly underneath the fixed header. We will add our indicator at the bottom of our header component. It will be just a div .indicator-track . It is a horizontal line occupying the whole width of the screen from left to right. When the page is not scrolled down at all the track, will whole visible. Inside our track we will place our actual indicator/progress bar.

```html [index]
<nav class="header">
   <div class="header__wrapper container">
      ...
   </div>
   <!-- Code for scroll indicator -->
   <div class="indicator__track">
    <div class="indicator__bar" id="indicator"></div>
   </div>
</nav>
```

Then we a add few lines of CSS and we should be able to see our track at the bottom of our fixed navbar, but the indicator will be not visible because we set it his width: 0.

```css [styles]
.indicator__track {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.indicator__bar {
  height: 8px;
  background: var(--primary-color);
  width: 0%;
}
```

> You can try changing the last line to e.g width: 50% for testing the purpose, that all works as expected and you should see our progress bar, but do not forget it then set it back to 0.

## The Javascript part

This is where the magic happens. We will bring our static (yet) progress bar to live. Maybe for the first time, you will ask yourself: “**How do I achieve this effect?**”, but the logic for this is simpler than you think. It can be done in just 4 steps.

To achieve this, We need to get a few information. First of all, We need to know how many of our document content is scrolled vertically. So as the user scrolls down, the value will change. At the top of the page, the number of pixels scrolled will be 0.

Secondly, we need to get the total height of the scrollable part minus the viewport (the part that the user actually sees on the screen at a certain moment). This gives us the maximum possible scroll height.

We are almost done, we need just the last few things to do. We need to calculate the percentage of how far the user has scrolled down the page by dividing the current scroll position winScroll by the maximum possible scroll height and multiplying by 100 to get a percentage.

Last but not least, We have to change CSS property width dynamically of the indicator based on the scrolled value. We also must call our updateIndicator function somewhere. We want to call it when the user scrolls the page, so we create an event handler listener that will trigger our function every time the user scrolls the page.

**Summary of the steps:**

1. Get current position of the scroll in pixels

1. Get total height of scrollable part minus visible area

1. Calculate progress in percentage

1. Change CSS property width of the indicator bar based on scroll
> The all dimensions are take from root element document.documentElement . But of course, this can be used only for certain element and its children.

```js [index]
const updateIndicator = () => {
  // 1) Get current position of the scroll in pixels
  const winScroll = document.documentElement.scrollTop;

  // scrollHeight - The total height of our document
  // clientHeight - The viewable height of the element (in pixels) including padding
  // 2) Get total height of scrollable part minus visible area
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // 3. Calculate progress in percentage
  const scrolled = (winScroll / height) * 100;

  // 4. Change CSS property width of the indicator bar based on scroll
  document.getElementById('indicator').style.width = scrolled + '%';
};

document.addEventListener('scroll', updateIndicator);
```

## Conclusion

In this tutorial we have learned the following:

* *How to get the current position of the scroll in pixels — ***element.scrollTop**

* How to *total scrollable height of our document / element — **element.scrollHeight***

* *How to get the viewable height of an element in pixels* — **element.clientHeight**

**Thank you for reading** ❤️

### **links:**

final code — [https://github.com/jimmzzz/js-basics/tree/main/scroll-indicator](https://github.com/jimmzzz/js-basics/tree/main/scroll-indicator)

[https://www.hendrych.io/](https://www.hendrych.io/)

[https://www.instagram.com/frontendblond/](https://www.instagram.com/frontendblond/)

[https://www.linkedin.com/in/tomas-hendrych-cz/](https://www.linkedin.com/in/tomas-hendrych-cz/)
[**Tomáš Hendrych**
*🚀 Passionate Self-Taught Developer | Transforming Ideas into codeCSS enthusiast ❤️5+ years of professional experience…*www.buymeacoffee.com](https://www.buymeacoffee.com/tomas.hendrych)
