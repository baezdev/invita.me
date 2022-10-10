export const showMenu = () => {
  const buttonMenu = document.querySelector(".button__menu");
  const navbarMenu = document.querySelector(".navbar__menu");
  const x = `<i class="fa-solid fa-x"></i>`;
  const menu = `<i class="fa-solid fa-bars-staggered"></i>`;

  buttonMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("showMenu");
    if (navbarMenu.classList.contains("showMenu")) {
      buttonMenu.innerHTML = x;
    } else {
      buttonMenu.innerHTML = menu;
    }
  });
};

export const generateLinks = () => {
  const navbarMenuContainer = document.querySelector(".navbar__menu-container");
  const links = [
    {
      text: "acceder",
      url: "login.html",
    },
    {
      text: "contacto",
      url: "contact.html",
    },
    {
      text: "sobre nosotros",
      url: "about.html",
    },
    {
      text: "servicios",
      url: "services.html",
    },
    {
      text: "diseños",
      url: "designs.html",
    },
  ];

  const location = window.location.pathname;
  const isPage = location.includes("pages");

  links.map(({ text, url }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = isPage ? url : `pages/${url}`;
    a.textContent = text;
    li.appendChild(a);
    navbarMenuContainer.appendChild(li);
  });

  /* Agregar el index */
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "/index.html";
  a.textContent = "inicio";
  li.appendChild(a);
  navbarMenuContainer.appendChild(li);
};
