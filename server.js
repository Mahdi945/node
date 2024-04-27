// Import des modules nécessaires
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import de la configuration de connexion à MongoDB
const mongoose = require('./config/connect.js');

// Import des routes pour les soumissions de formulaire
const submitFormRoute = require('./routes/submitForm.js');  

// Création de l'application Express
const app = express();


app.use(cors()); // Autoriser toutes les requêtes CORS
// Middleware personnalisé pour gérer CORS (à adapter en fonction de vos besoins de sécurité)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permettre à tous les domaines d'accéder à l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Méthodes HTTP autorisées
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // En-têtes autorisés
    next();
});


app.use(express.json()); // Middleware pour traiter les données JSON
app.use(express.urlencoded({ extended: true })); // Middleware pour traiter les données de formulaire URL-encodées
app.use(bodyParser.json()); // Middleware bodyParser pour traiter les données JSON

// Utilisation des routes définies dans submitFormRoute
app.use('/submitForm', submitFormRoute);

// Configuration du port d'écoute du serveur
const PORT = process.env.PORT || 3000;
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});