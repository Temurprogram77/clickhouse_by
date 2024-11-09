let menu_box = document.querySelector(".manu_container");
let body = document.querySelector("body");
let menu = document.querySelector(".menu");
let clickText = document.querySelector(".click-text");
let user = document.querySelector(".user");
let users_number = document.querySelector(".users_number");
let menu2 = document.querySelector(".menu2");
let close = document.querySelector(".close");
let closeBtn = document.querySelector(".close_btn");
let closeButton = document.querySelector(".close_btn2");
let color = document.querySelector(".color");
let btnBasket = document.querySelector(".btn_basket");
let blurBox = document.querySelector(".blur_radius");
let btnKorzina = document.querySelector(".btn_korzina");

menu.addEventListener("click", () => {
  menu_box.style = "left: 0;";
  blurBox.style = "display: block;";
});

menu2.addEventListener("click", () => {
  menu_box.style = "left: 0;";
  blurBox.style = "display: block;";
});

clickText.addEventListener("click", () => {
  users_number.style = "right: 0;";
  blurBox.style = "display: block;";
});

close.addEventListener("click", () => {
  menu_box.style = "left: -600px;";
  blurBox.style = "display: none;";
});

closeBtn.addEventListener("click", () => {
  users_number.style = "right: -600px;";
  blurBox.style = "display: none;";
});


closeButton.addEventListener("click", () => {
  color.style = "right: -600px;";
  blurBox.style = "display: none;";
});

btnBasket.addEventListener("click", () => {
  color.style = "right: 0;";
  blurBox.style = "display: block;";
});

btnKorzina.addEventListener("click", () => {
});