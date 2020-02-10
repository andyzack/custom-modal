# Modal Dialog Component

### How to use:
1. Add the modal.js file to your project.
1. Include it using `<script src="./modal.js"></script>` 
1. Add tag 
    ```
    <sitemate-modal>
    <h1 slot="header">Information Box</h1>
    some text
    </sitemate-modal>

### Idea:

As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

#### Custom elements:
A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.

#### Shadow DOM:
A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.

#### HTML templates:
The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.


### References:
https://developer.mozilla.org/en-US/docs/Web/Web_Components
https://www.webcomponents.org/introduction