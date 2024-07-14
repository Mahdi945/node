const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const submitFormRoute = require('./routes/submitForm.js');  

const app = express();

// Use CORS middleware
app.use(cors({ origin: 'https://node-glqp.vercel.app' }));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

app.use('/submitForm', submitFormRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
