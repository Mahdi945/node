const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Module path pour gérer les chemins de fichiers

const mongoose = require('./config/connect.js');

const submitFormRoute = require('./routes/submitForm.js');

const app = express();

app.use(cors()); // Autoriser toutes les requêtes CORS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/submitForm', submitFormRoute);



// Pour toutes les autres requêtes, renvoyer l'index.html, où Angular gère les routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html')); // Remplacez 'your-angular-app' par le nom de votre application Angular
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
