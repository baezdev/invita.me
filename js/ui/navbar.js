import { getUserLogged } from "../auth/getUser";
import { signOut } from "../auth/signOut.js";

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

/**
 * Genera los enlaces de la barra de navegación y, si el usuario ha iniciado sesión, mostrará un botón para cerrar sesión.
 */
export const generateLinks = async () => {
  const navbarMenuContainer = document.querySelector(".navbar__menu-container");
  const links = [
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

  const infoUser = await getUserLogged();

  const liLogin = document.createElement("li");

  if (!infoUser) {
    const aLogin = document.createElement("a");
    aLogin.href = isPage ? `./login.html` : `pages/login.html`;
    aLogin.textContent = "acceder";
    liLogin.appendChild(aLogin);
    navbarMenuContainer.appendChild(liLogin);
  } else {
    const name = infoUser?.name;
    const logoutButton = document.createElement("button");
    //El boton tendra el nombre del usuario
    logoutButton.innerHTML = /* html */ `
    Cerrar sesión
    <span class='button__signOut-name'>(${name})</span>
    `;
    liLogin.appendChild(logoutButton);
    navbarMenuContainer.appendChild(liLogin);
    //Cerrar sesion y recargar la pagina
    logoutButton.addEventListener("click", signOut);
  }

  links.map(({ text, url }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = isPage ? url : `pages/${url}`;
    a.textContent = text;
    li.appendChild(a);
    navbarMenuContainer.appendChild(li);
  });

  /* Agregar el Inicio */
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = isPage ? "../index.html" : "./index.html";
  a.textContent = "inicio";
  li.appendChild(a);
  navbarMenuContainer.appendChild(li);
};
