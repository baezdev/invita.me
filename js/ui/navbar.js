import { supabase } from "../config/supabase.config";

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

  //Creacion del boton de cerrar sesion o de acceder
  const authUser = await supabase.auth.getSession();
  //Info de usuario
  const { data } = await authUser;

  const liLogin = document.createElement("li");
  //Si una sesion iniciada mostrara el boton de cerrar sesion
  if (data.session) {
    const name = data.session.user.user_metadata.name;
    const logoutButton = document.createElement("button");
    //El boton tendra el nombre del usuario
    logoutButton.innerHTML = /* html */ `
    Cerrar sesión
    <span class='button__signOut-name'>(${name})</span>
    `;
    liLogin.appendChild(logoutButton);
    navbarMenuContainer.appendChild(liLogin);
    //Cerrar sesion y recargar la pagina
    logoutButton.addEventListener("click", async () => {
      await supabase.auth.signOut();
      window.location.reload();
    });
    //Mostrar enlace para acceder
  } else {
    const aLogin = document.createElement("a");
    aLogin.href = isPage ? url : `pages/login.html`;
    aLogin.textContent = "acceder";
    liLogin.appendChild(aLogin);
    navbarMenuContainer.appendChild(liLogin);
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
