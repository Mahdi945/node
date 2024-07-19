const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router(); // Initialisation de router

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mahdibeyy@gmail.com',
        pass: 'arhmcywiuwkbklqq'
    }
});

router.post('/ajout', async (req, res) => {
    const { nomSociete, telephone, email, adresseSociete, typeMachine, refMachine, descriptionPanne } = req.body;

    try {
        // Enregistrement des données dans MongoDB
        const newFormData = new SubmitForm({
            nomSociete,
            telephone,
            email,
            adresseSociete,
            typeMachine,
            refMachine,
            descriptionPanne
        });

        await newFormData.save();

        // Envoi d'un email de confirmation
        const mailOptions = {
            from: 'mahdibeyy@gmail.com',
            to: email,
            subject: 'Confirmation de réception de votre demande',
            text: `Votre demande a été reçue avec succès.`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send('Formulaire soumis avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de la soumission du formulaire');
    }
});

module.exports = router;