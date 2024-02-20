// Top NavBar Animation

let action = document.querySelector(".btn-menu");
let nav = document.querySelector(".side-nav");
let buttonAnim = Array.from(document.getElementsByClassName("btn-menu__bar"));

let openNav = action.addEventListener("click", () => {
  nav.classList.toggle("open");
  for (let i = 0; i < buttonAnim.length; i++) {
    buttonAnim[i].classList.toggle("change");
  }
});