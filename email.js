const nodemailer = require('nodemailer');

let transporte = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'nicollaskauapereirareis@gmail.com',
        pass:'wposerquwbypkkxh',
    },
});

transporte.sendMail({
   from: 'Nicollas Reis <nicollaskauapereirareis@gmail.com>',
   to: 'nick.reis0101@gmail.com',
   subject: 'Envio com nodemailer',
   html: '<h1> testando <\h1>', 
}).then(() => console.log('Email enviado')).catch((erro) => console.log('Erro no envio', erro));
14228