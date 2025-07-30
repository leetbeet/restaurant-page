import "./style.css";
import "./tuscan-dish.jpg"
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

loadHome();

const home = document.querySelector("#home-btn");
const menu = document.querySelector("#menu-btn");
const contact = document.querySelector("#contact-btn");

home.addEventListener("click", loadHome);
menu.addEventListener("click", loadMenu);
contact.addEventListener("click", loadContact);
