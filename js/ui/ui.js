/* Boton para ir hacia arriba */
export const goUp = () => {
  const buttonArrow = document.querySelector(".button__top");
  /* Ya que esta funcion se ejecuta cuando se carga el documento, el boton se ocultara al cargar la pagina */
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
