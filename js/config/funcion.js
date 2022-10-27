(function(){
    var formulario=document.getElementsByName('contacto')[0],
    elementos=formulario.elements,
    boton=document.getElementsById('btn');
    var validarName=function(e){
        if(formulario.name.value == 0) {
            alert("Completa el campo Nombre");
            e.preventDefault();
        }
    };

    var validarEmail=function(e){
        if(formulario.email.value == 0) {
            alert("Ingrese un correo electrónico");
            e.preventDefault();
        }
    };

    var validarMessage=function(e){
        if(formulario.message.value == 0) {
            alert("ingrese un mensaje");
            e.preventDefault();
        }
    };

    var validar=function(e){
        validarName(e);
        validarEmail(e);
        validarMessage(e);
    };
    formulario.addEventListener("submit", validar);
}());
var correo=formulario.email;
var mensaje=formulario.message;
var nombre=formulario.name;

