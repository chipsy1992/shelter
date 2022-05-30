const mainMenu = document.querySelector(".nav-items");
const closeMenu = document.querySelector(".close-btn");
const openMenu = document.querySelector(".open-btn");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.left = "0";
}

function close() {
  mainMenu.style.left = "100%";
}
