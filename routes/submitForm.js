const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configuration du transporter Nodemailer pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mahdibeyy@gmail.com',
        pass: 'arhmcywiuwkbklqq'
    }
});

// Route POST pour l'ajout d'une soumission de formulaire
router.post('/ajout', async (req, res) => {
    // Extraction des données du formulaire de la requête
    const { nomSociete, telephone, email, adresseSociete, typeMachine, refMachine, descriptionPanne } = req.body;

    try {
        // Options de l'e-mail à envoyer
        const mailOptions = {
            from: 'mahdibeyy@gmail.com',
            to: 'mongi.bey@gmail.com',
            subject: 'Nouvelle soumission de formulaire',
            html: `
                <p><strong>Nom de la société:</strong> ${nomSociete}</p>
                <p><strong>Le numéro de telephone:</strong> ${telephone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Adresse:</strong> ${adresseSociete}</p>
                <p><strong>Type de machine:</strong> ${typeMachine}</p>
                <p><strong>Référence de la machine:</strong> ${refMachine}</p>
                <p><strong>Description de la panne:</strong> ${descriptionPanne}</p>
            `
        };

        // Envoi de l'e-mail
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail sent:', info.response);

        // Réponse au client avec un message de succès
        res.status(200).json({ message: 'Formulaire ajouté avec succès' });
    } catch (error) {
        // Gestion des erreurs
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Export du routeur pour utilisation dans d'autres parties de l'application
module.exports = router;