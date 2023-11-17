let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-xmark");

openBtn.addEventListener("click", function () {
  document.querySelector(".nav-menu ul").classList.remove("left-menu");
});

closeBtn.addEventListener("click", function () {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});

// menu
let menu_href = document.querySelectorAll("ul li a");
menu_href[0].addEventListener("click", () => {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});
menu_href[1].addEventListener("click", () => {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});
menu_href[2].addEventListener("click", () => {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});
menu_href[3].addEventListener("click", () => {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});
menu_href[4].addEventListener("click", () => {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});
menu_href[5].addEventListener("click", () => {
  document.querySelector(".nav-menu ul").classList.add("left-menu");
});

// Modal
document.querySelector(".slider-our-btn").addEventListener("click", (event) => {
  event.preventDefault();
  let modal = document.querySelector(".modal");
  modal.classList.add("modal-event");
  document.querySelector("body").style.overflow = "hidden";
});

document.querySelector("#modal-close").addEventListener("click", function () {
  let modal = document.querySelector(".modal");
  modal.classList.remove("modal-event");
  document.querySelector("body").style.overflow = "scroll";
});
