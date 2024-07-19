const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const submitFormRoute = require('./routes/submitForm.js');  
const mongoose = require('./config/connect.js'); // Importation de connect.js

const app = express();

app.use(cors()); // Autoriser toutes les requêtes CORS
// Middleware personnalisé pour gérer CORS (à adapter en fonction de vos besoins de sécurité)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permettre à tous les domaines d'accéder à l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Méthodes HTTP autorisées
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // En-têtes autorisés
    next();
});

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

app.use('/submitForm', submitFormRoute);

const PORT = process.env.PORT || 3000;

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

mongoose.connection.on('error', (error) => {
    console.error('error in connection:', error);
});