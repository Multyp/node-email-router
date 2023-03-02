// Récupérer les données du formulaire
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

document.getElementById("send-email").addEventListener('click', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    fetch('https://your.domain/controllers/mails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
        .then((response) => {
            if (response.ok) {
                alert('Votre message a été envoyé avec succès!');
            } else {
                alert("Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.");
            }
        })
        .catch((error) => {
            alert("Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.");
        });
});