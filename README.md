# node-email-router

node-email-router is a simple email sending application built with Node.js and Nodemailer.
It includes a client-side script and a server-side script that work together to send emails
from a web form.

This is my first project using Node.js.

## Getting Started
To get started, you'll need to have Node.js installed on your computer. You can download it
from the official Node.js website (https://nodejs.org/).

Once you have Node.js installed, you can clone this repository to your local machine:
`
git clone https://github.com/<your-username>/node-email-router.git
`
Next, navigate to the project directory and install the dependencies:
```bash
cd node-email-router
npm install
```
## Configuration
To use node-email-router, you'll need to configure the server-side script with your Gmail
account information. Open the 'server.js' file and update the 'user' and 'pass' properties
with your Gmail address and app password:
```javascript
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-gmail-address@gmail.com',
        pass: 'your-gmail-app-password',
    }
});
```
## Usage
To use node-email-router, open the 'index.html' file in your web browser. Fill out the form
with your name, email address, and message, then click the "Envoyer" button to send the
email.

If the email is sent successfully, you'll see an alert message that says "Votre message a été
envoyé avec succès!". If there's an error, you'll see an alert message that says "Une erreur
s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard."
