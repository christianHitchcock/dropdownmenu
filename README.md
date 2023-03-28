# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
great challenge . took me sometime to figure a few things out. tried my best to get it to the closet resemblace as possible.
### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page




## My process
used mobile - firt approach to get the mobile design first. wrote three functions on javascript to toggle the side bar(open/close)
### Built with

Semantic HTML5 markup
CSS custom properties
javascript
Flexbox
Mobile-first workflow


### What I learned
adding stopPropagation to prevent the drop down menu closing fast when clicked on mobile view.
using a curtain menu to make the nav stay horizontal and transition properly.



```js
document.getElementById("firstDropdown").addEventListener('click', function (event) {
  console.log("click outside to close")  
  event.stopPropagation();
});
```



### Continued development
javascript skills.. building more javascript projects.

### Useful resources
  stackoverfollow 
  techover my whatsapp community.
## Author


- Website - [christian](https://www.buymeacoffee.com/hitchcock)
- Frontend Mentor - [@christianHitchcock](https://www.frontendmentor.io/profile/christianHitchcock)
- Twitter - [@Oj_Hitchcock](https://twitter.com/Oj_Hitchcock)



## Acknowledgments

Techover(my whatsapp community group)
