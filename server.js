const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Module path pour travailler avec les chemins de fichiers
const mongoose = require('./config/connect.js'); // Importez votre connexion à MongoDB

const submitFormRoute = require('./routes/submitForm.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Utilisation de la route pour gérer les formulaires
app.use('/submitForm', submitFormRoute);

// Redirection pour servir l'application front-end Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'D:\\D_Documents\\Angular\\CNC_Project\\cncs\\src\\index.html')); // Remplacez 'path_vers_votre_index.html' par le chemin vers votre fichier index.html
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});