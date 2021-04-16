'use strict'
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'javiercanales.developer@gmail.com',
      pass: 'p1chulagalactica' // naturally, replace both with your real credentials or an application-specific password
    }
});

const sendEmail = (req, res) => {
    console.log('Body: ')
    console.log(req.body);

    const mailOptions = {
        from: req.body.email,
        to: 'javiercanales.developer@gmail.com',
        subject: req.body.subject,
        text: req.body.comment + "\n\nEmail del emisor: " + req.body.email
    };

    transporter.sendMail(mailOptions, function(err, res){
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent: ' + res.response);
        }
    });

    res.status(200).send({ result: 'OK'});
}

const example = (req, res) => {
    res.status(200).send({ message: "Hello World!" });
}

module.exports = {
    example,
    sendEmail
}