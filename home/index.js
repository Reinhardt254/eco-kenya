

let togglebar = document.getElementById("toggle-nav");
let openNavigation = document.getElementById("navbar");
let backtoggler = document.getElementById("x");

openNavigation.addEventListener("click", function () {
  togglebar.style.display = "block";
});

backtoggler.addEventListener("click", function () {
  togglebar.style.display = "none";
});


