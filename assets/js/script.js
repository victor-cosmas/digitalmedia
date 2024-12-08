"use strict";

// add event on multiple elements
const addEventOnElement = function (elements, evetType, callback) {
  elements.forEach((i) => {
    i.addEventListener(evetType, callback);
  });
};

// navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);
