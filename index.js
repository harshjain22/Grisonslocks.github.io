const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const display = document.querySelector(".banner_slider");
const logo = document.querySelector(".logo");


const toggleNavbar = ( ) => {
 
    nav_header.classList.toggle("active");
    display.classList.toggle("on");

};

const home = ( ) => {
 logo.innerHTML = "<a href='http://127.0.0.1:5500/GrisonsLocks.html#'> </a>";

};

mobile_nav.addEventListener("click", () => toggleNavbar());

logo.addEventListener("click", () => home());