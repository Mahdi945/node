const express = require('express');
const router = express.Router();
const cors = require('cors');
const sendFormDataByEmail = require('../models/submitForm.js'); // Importez la fonction sendFormDataByEmail
const bodyParser = require('body-parser'); // Importez bodyParser

// Utilisez le middleware CORS pour permettre les requêtes cross-origin
router.use(cors());

// Utilisez bodyParser pour analyser les données du corps de la requête POST
router.use(bodyParser.urlencoded({ extended: true }));

// Route pour ajouter un formulaire
router.post('/ajout', async (req, res) => {
    // Récupérer les données du formulaire
    const { nomSociete, NumOuEmail, typeMachine, refMachine, DescriptionPanne, photoPanne } = req.body;

    // Appel de la fonction sendFormDataByEmail pour envoyer les données par e-mail
    sendFormDataByEmail({
        nomSociete,
        NumOuEmail,
        typeMachine,
        refMachine,
        DescriptionPanne,
        photoPanne
    }).then(() => {
        res.status(200).json({ message: 'Email sent successfully' });
    }).catch(error => {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
