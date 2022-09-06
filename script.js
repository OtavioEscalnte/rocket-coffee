var open = document.querySelector(".menu-open");
var close = document.querySelector(".menu-close");
var nav = document.querySelector("nav");
var menuItem = document.querySelector("a");

open.addEventListener("click", () => {
  open.style.display = "none";
  nav.style.left = "0";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  nav.style.left = "100%";
  open.style.display = "block";
});

menuItem.addEventListener("click", () => {
  menuItem.style.cssText =
    "border-left:3px solid var(--button); color: var(--text-color-menu-mobile)";
});
