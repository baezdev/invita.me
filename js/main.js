const $ = (selector) => document.querySelector(selector);

const navbarLinksContainer = $(".navbar__links-container");

const links = [
  {
    text: "diseños",
    href: "designs.html",
  },
  {
    text: "servicios",
    href: "services.html",
  },
  {
    text: "¿Quiénes Somos?",
    href: "about.html",
  },
  {
    text: "contacto",
    href: "contact.html",
  },
];

const generateLinks = () => {
  const location = window.location.pathname;
  const isPagesLocation = location.includes("pages");

  links.map(({ text, href }) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${
      isPagesLocation ? href : `pages/${href}`
    }>${text}</a>`;
    li.classList.add("navbar__links-link");

    navbarLinksContainer.appendChild(li);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  generateLinks();
});
