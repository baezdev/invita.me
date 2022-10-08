import { showMenu, generateLinks } from "./navbar.js";
import { createTypesEvents, goUp } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
  generateLinks();
  goUp();
  createTypesEvents();
});