import "./navbar.js";
import "./navbar.css";

const hamburger = document.querySelector(".burgerNav");
const navLinks = document.querySelector(".nav-links");
const navItem = document.querySelectorAll(".nav-links p");

const clickHelper = () => {
  navLinks.classList.toggle("open");
};

export default clickHelper;
