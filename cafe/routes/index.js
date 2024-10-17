var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',async(req, res, next) =>  {

  var nombre = req.body.nombre;
  var apellido= req.body.apellido;
  var email= req.body.email;
  var tel= req.body.tel;
  var mensaje= req.body.mensaje;

  var obj = {
    to: 'ssilvinabalverde@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + "se contacto a traves de la web y quiere mas info a este correo : " + email + ". <br> Ademas, hizo el siguiente comentario : " + mensaje + ". <br> Su tel es " + tel
  } //cierra var obj

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
}
}) //cierra transporte

var info = await transport.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente'

  })

}); //cierra peticion del post


module.exports = router;
