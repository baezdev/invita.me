const $ = (selector) => document.querySelector(selector);

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
    text: "sobre nosotros",
    href: "about.html",
  },
  {
    text: "contacto",
    href: "contact.html",
  },
];

const generateLinks = () => {
  const navbarLinksContainer = $(".navbar__links-container");
  const navbarLinksContainerResponsive = $(".menu__responsive");

  const location = window.location.pathname;
  const isPagesLocation = location.includes("pages");

  /*   Genera los links de la navegacion  */
  links.map(({ text, href }) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${
      isPagesLocation ? href : `pages/${href}`
    }>${text}</a>`;
    li.classList.add("navbar__links-link");

    navbarLinksContainer.appendChild(li);
  });

  /*   Genera los links de la navegacion del menu responsivo */
  links.map(({ text, href }) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${
      isPagesLocation ? href : `pages/${href}`
    }>${text}</a>`;
    li.classList.add("navbar__links-link");

    navbarLinksContainerResponsive.appendChild(li);
  });
};

//Abrir y cerrar el menu responsivo
const toggleButtonMenu = () => {
  const buttonMenu = $("#button__menu");
  const menuResponsive = $(".menu__responsive-container");

  buttonMenu.addEventListener("click", () => {
    if (menuResponsive.classList.contains("hidden")) {
      menuResponsive.classList.replace("hidden", "flex");
    } else {
      menuResponsive.classList.replace("flex", "hidden");
    }
  });
};

//Boton para ir hacia arriba
const goUp = () => {
  const buttonArrow = $(".button__top");
  //Ya que esta funcion se ejecuta cuando se carga el documento, el boton se ocultara al cargar la pagina
  buttonArrow.style = `display:none`;

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop === 0) {
      buttonArrow.style = `display:none`;
    } else {
      buttonArrow.style = `display:block`;
    }
  });

  buttonArrow.addEventListener("click", () => scroll(0, 0));
};

document.addEventListener("DOMContentLoaded", () => {
  generateLinks();
  toggleButtonMenu();
  goUp();
});
