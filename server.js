const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./config/connect.js');

const submitFormRoute = require('./routes/submitForm.js');

const app = express();


// Ajouter middleware pour gérer CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permettre à tous les domaines d'accéder à l'API (à ajuster en fonction de vos besoins de sécurité)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Méthodes HTTP autorisées
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // En-têtes autorisés
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/submitForm', submitFormRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'D:\\D_Documents\\Angular\\CNC_Project\\cncs\\src\\index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});