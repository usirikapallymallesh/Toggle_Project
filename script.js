var headingTag = document.querySelector("h1");
var bodyTag = document.querySelector("body");
var circle = document.querySelector(".circle");
var toggled = false;
let toggleContainer = document.querySelector(".toggle_button");
toggleContainer.addEventListener("click", () => {
  if (!toggled) {
    bodyTag.classList.add("dark_mode");
    circle.classList.add("dark-mode");
    toggleContainer.classList.add("toggle_btn");
    toggled = true;
  } else {
    bodyTag.classList.remove("dark_mode");
    circle.classList.remove("dark-mode");
    toggleContainer.classList.remove("toggle_btn");
    toggled = false;
  }
});
