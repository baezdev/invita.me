export const createTypesEvents = () => {
  const eventsContainer = document.querySelector(".types__events-container");
  const events = [
    {
      name: "boda",
      img: "../images/boda.webp",
    },
    {
      name: "xv años",
      img: "../images/xv.webp",
    },
    {
      name: "baby shower",
      img: "../images/baby.webp",
    },
    {
      name: "bautizo",
      img: "../images/bautizo.webp",
    },
    {
      name: "despedida de solter@",
      img: "../images/despedida.webp",
    },
    {
      name: "cumpleaños",
      img: "../images/cumple.webp",
    },
    {
      name: "graduaciones",
      img: "../images/graduacion.webp",
    },
    {
      name: "y más...",
      img: "../images/reunion.webp",
    },
  ];

  events.map(({ img, name }) => {
    const imgDiv = document.createElement("div");
    imgDiv.style = /* css */ `background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;`;

    imgDiv.classList.add("types__event");
    imgDiv.setAttribute("text", name);
    eventsContainer.appendChild(imgDiv);
  });
};

//Boton para ir hacia arriba
export const goUp = () => {
  const buttonArrow = document.querySelector(".button__top");
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
