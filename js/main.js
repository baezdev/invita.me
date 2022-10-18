import { showMenu, generateLinks } from "./ui/navbar.js";
import { goUp } from "./ui/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
  generateLinks();
  goUp();
});
