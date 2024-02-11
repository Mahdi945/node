const express = require('express');
const cors = require('cors'); // Importez le module cors

const bodyParser = require('body-parser');
const submitFormRoute = require('./routes/submitForm.js');

const app = express();


app.use(express.json());

// Utilisez le middleware cors pour permettre les requêtes cross-origin
app.use(cors());

app.use('/submitForm', submitFormRoute);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
