const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const submitFormRoute = require('./routes/submitForm.js');  
const mongoose = require('./config/connect.js'); // Importation de connect.js

const app = express();


const allowedOrigins = ['https://projet-murex-delta.vercel.app'];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
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