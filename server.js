const { request } = require('http');
const express = require('express');
const { appendFile } = require('fs');
const bodyParser = require('body-parser');

module.exports = (request, response) => {
    const nodemailer = require('nodemailer');
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.post('/controllers/mails', (request, response) => {
        const name = request.body.name;
        const email = request.body.email;
        const message = request.body.message;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'example@gmail.com',
                pass: 'your-gmail-app-password',
            }
        });

        const mailOptions = {
            from: email,
            to: 'example@gmail.com',
            subject: 'Nouveau message de ' + name,
            text: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email envoyé : ' + info.response);
            }
        });
    });
}