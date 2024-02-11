// emailService.js

const nodemailer = require('nodemailer');

async function sendFormDataByEmail(formData) {
    try {
        // Configurer le transporteur Nodemailer avec vos identifiants Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mahdibeyy@gmail.com',
                pass: 'arhmcywiuwkbklqq'}
        });

        // Options de l'e-mail
        const mailOptions = {
            from: 'mahdibeyy@gmail.com',
            to: 'mongi.bey@gmail.com',
            subject: 'Nouvelle soumission de formulaire',
            html: `
                <p><strong>Nom de la société:</strong> ${formData.nomSociete}</p>
                <p><strong>Numéro ou Email:</strong> ${formData.NumOuEmail}</p>
                <p><strong>Type de machine:</strong> ${formData.typeMachine}</p>
                <p><strong>Référence de la machine:</strong> ${formData.refMachine}</p>
                <p><strong>Description de la panne:</strong> ${formData.DescriptionPanne}</p>
                <p><strong>Photo de la panne:</strong> ${formData.photoPanne}</p>
            `
        };

        // Envoyer l'e-mail
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Propagez l'erreur pour la gérer dans votre route
    }
}

module.exports = sendFormDataByEmail;
