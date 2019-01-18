## ProductPlan Candidate Exercise Response

Assignment Location -  https://github.com/mark-barbir/productplan-candidate-homework

## Live

http://danielcox.io/productplan-candidate-homework/

## Installation and Startup

```
$ npm i && npm start
```

## Remaining Items
* Tests (Absolutely Critical)
* Item create is currently not possible.
* User walkthrough tutorial

## Background

I wanted to create a very simple react app from scratch. I am aware there are a tons of react templates to use but wanted to get a feel for using React. I am planning on using Jest and Enzyme to test the application but have run into a few testing roadblocks on my local machine. 

The following technologies are being utilized...

Parceljs, React, ReactDom, React-beautiful-dnd, styled-components

## Known Issues

* Rotation of Draggable Items currently problematic in react-beautiful-dnd

```
Warning: position: fixed
react-beautiful-dnd uses position: fixed to position the dragging element. This is quite robust and allows for you to have position: relative | absolute | fixed parents. However, unfortunately position:fixed is impacted by transform (such as transform: rotate(10deg);). This means that if you have a transform: * on one of the parents of a Draggable then the positioning logic will be incorrect while dragging. Lame! For most consumers this will not be an issue.

To get around this you can use React.Portal. We do not enable this functionality by default as it has performance problems. We have a using a portal guide explaining the performance problem in more detail and how you can set up your own React.Portal if you want to.
```
* List(s) placeholder element is missing styling.

