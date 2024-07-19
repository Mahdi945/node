const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const submitFormRoute = require('./routes/submitForm.js');  
const mongoose = require('./config/connect.js'); // Importation de connect.js

const app = express();

// Configuration de CORS pour accepter plusieurs origines
const allowedOrigins = ['https://projet-murex-delta.vercel.app', 'https://node-glqp.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
        // Autoriser les requêtes sans origine (comme les requêtes mobiles ou curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

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
