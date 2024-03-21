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

// Serve les fichiers statiques du dossier "dist" de votre application Angular
app.use(express.static(path.join(__dirname, 'D_Documents/Angular/CNC_Project/cncs/dist')));

// Redirige toutes les routes non trouvées vers votre application Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'D_Documents/Angular/CNC_Project/cncs/dist/index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
