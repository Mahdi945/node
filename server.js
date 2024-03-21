const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('./config/connect.js');

const submitFormRoute = require('./routes/submitForm.js');

const app = express();

app.use(cors({
    origin: 'https://projet-murex-delta.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/submitForm', submitFormRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
