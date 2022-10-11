const imagenes = document.querySelectorAll('.plantilla')
const imagenesLight = document.querySelector('.agregarImg')
const contenedorLight = document.querySelector('.imagen-light')
const flecha = document.querySelector('.button__top');


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImg(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        flecha.style.display = ''
    }
})

const aparecerImg = (imagen) => {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    flecha.style.display = 'none'

}