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
var msg='<p style="text-align: center;"><strong>Confirmaci&oacute;n de contacto</strong></p><p>Se ha contactado con nosotros a trav&eacute;s de nuestra p&aacute;gina web, donde ingres&oacute; el siguiente mensaje:</p><p>'+mensaje+'</p><p>No es necesario contestar este correo, posteriormente uno de nuestros operadores se pondr&aacute; en contacto con usted.</p><p>Agradeciendo su preferencia:</p><p>El equipo de Invit*Arte.</p><p>Correo enviado de manera Autom&aacute;tica al correo que proporcion&oacute; en invit-arte.com, no contestar a este correo.</p>';

const express = require('express');
const nodemailer=require('nodemailer');
const PORT=3000;
const app=express();

app.post("/mail", (req, res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'contacto.invit.arte.com@gmail.com', // generated ethereal user
          pass: 'lchqwiylsvserhry', // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      return transporter.sendMail({
        from: '"Invit-arte (Contacto)" <contacto.invit.arte.com@gmail.com>', // sender address
        to: correo, // list of receivers
        subject: "Contacto (no es necesario responder)", // Subject line
        text: "texto de prueba", // plain text body
        html: msg, // html body
      },(err, info)=>{
        if(err) res.status.apply(200).send({ sucess: false, error: err });
        return res.status(200).send({
            sucess: true,
            message: 'Enviado'
        });
      });
});
app.listen(PORT, ()=>console.log('App disponible en el puerto $(PORT)'));
