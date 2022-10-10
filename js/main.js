import { showMenu, generateLinks } from "./interface/navbar.js";
import { createTypesEvents, goUp } from "./interface/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
  generateLinks();
  goUp();
  createTypesEvents();
});
