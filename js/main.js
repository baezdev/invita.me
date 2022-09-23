const $ = (selector) => document.querySelector(selector);

const navbarLinksContainer = $(".navbar__links-container");

const links = ["inicio", "diseños", "servicios", "¿Quiénes Somos?", "contacto"];

const generateLinks = () => {
  links.map((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${link}>${link}</a>`;
    li.classList.add("navbar__links-link");

    navbarLinksContainer.appendChild(li);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  generateLinks();
});
