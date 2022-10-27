const cont = document.querySelector('.contenedorP')

const elemTarjetas = [
    {
        titulo: "Baby",
        url: "../images/baby.webp",
    },
    {
        titulo: "Bautizo",
        url: "../images/bautizo.webp",
    },
    {
        titulo: "Boda",
        url: "../images/boda.webp",
    },
    {
        titulo: "Cumple",
        url: "../images/cumple.webp",
    },
    {
        titulo: "Despedida",
        url: "../images/despedida.webp",
    },
    {
        titulo: "Graduacion",
        url: "../images/graduacion.webp",
    },
    {
        titulo: "Reunion",
        url: "../images/reunion.webp",
    },
    {
        titulo: "XV Años",
        url: "../images/xv.webp",
    }]

let tarjetas = ""

elemTarjetas.forEach(({ titulo, url }) =>{

    tarjetas += `
    <div class="fondo">
            <article class="tarjetaP tarjetaS">
                <header class="cabeceraP">
                    <img src="${url}" alt="" class="plantilla"></img>
                </header>
                <h2 class="costo">${titulo}</h2>
                <a href="create_invitation.html" class="button botonP">
                    Usa esta plantilla<i class="ri-arrow-right-line"></i>
                </a>
            </article>
        </div>`;
})

    let previa = `<section class="imagen-light">
    <img src="../images/cerrar.svg" alt="" class="close">
    <img src="" alt="" class="agregarImg">
  </section>`


cont.innerHTML = tarjetas + previa
