const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const SubmitForm = require('../models/submitForm.js');

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

        // Options de l'e-mail
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

        // Envoyer l'e-mail
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail sent:', info.response);

        // Afficher un message de confirmation dans la console
        console.log('Formulaire ajouté avec succès :', newFormData);

        // Répondre au client avec un message de succès
        res.status(200).json({ message: 'Formulaire ajouté avec succès', formData: newFormData });
    } catch (error) {
        console.error('Error adding form data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;