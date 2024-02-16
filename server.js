const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./config/connect.js'); // Importez votre connexion à MongoDB

const submitFormRoute = require('./routes/submitForm.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Utilisation de la route pour gérer les formulaires
app.use('/submitForm', submitFormRoute);

const PORT = process.env.PORT || 3000; // Utilisez le port spécifié dans les variables d'environnement ou le port 3000 par défaut
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});