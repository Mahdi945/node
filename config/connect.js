// Import de Mongoose
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/submitForm')
    .then(() => {
         console.log('connected to db !');
    })
    .catch(() => {
        console.log('error in connection');
    });

// Export de l'objet Mongoose pour utilisation dans d'autres parties de l'application
module.exports = mongoose;

