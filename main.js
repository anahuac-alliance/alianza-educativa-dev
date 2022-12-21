/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/home/courses-carousel/carousel.js
class CoursesCarousel {
  constructor () {
    this.init()
  }

  init() {
    let coursesCarousel = document.querySelector('#coursesCarousel')
    let flkt = new Flickity(coursesCarousel, {
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      prevNextButtons: false,
    })
  }
}

/* harmony default export */ const carousel = (new CoursesCarousel);
;// CONCATENATED MODULE: ./src/components/home/modals/register.js

let showPasswordBtn = document.querySelector('#showPassword')
let passwordField = document.querySelector('#passwordField')

class RegisterModal {
  constructor() {

    showPasswordBtn.addEventListener('click', this.showPassword)
  }

  showPassword ( ) {
    if (passwordField.getAttribute('type') == 'password') {
      passwordField.setAttribute('type', 'text')
    } else {
      passwordField.setAttribute('type', 'password')
    }
  }
}

/* harmony default export */ const register = (new RegisterModal());
;// CONCATENATED MODULE: ./src/index.js


// Home



/******/ })()
;