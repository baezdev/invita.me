const nodemailer = require("nodemailer");

window.onload = function () {             
    var a = document.getElementById('a');
    a.addEventListener("click", enviarCorreo);         
}

function enviarCorreo(){
    var formulario=document.forms;
    enviarDatos(formulario);
}
function enviarDatos(form){
    var nombre=document.getElementById('nombre');
    var email=document.getElementById('email');
    var mensaje=document.getElementById('message');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'contacto.invit.arte.com@gmail.com',
          pass: 'invit-arte123'
        }
      });
    var mailOptions = {
        from: 'contacto.invit.arte.com@gmail.com',
        to: email,
        subject: 'Contacto de invit-arte',
        text: mensaje
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
}

