// Import de Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mahdibeyy:xR9HVL1yY4SEK2HB@submitform.ezxf5pf.mongodb.net/?retryWrites=true&w=majority&appName=submitForm', {


})
    .then(() => {
         console.log('connected to ATLAS !');
    })
    .catch((error) => {
        console.error('error in connection:', error);
    });

// Export de l'objet Mongoose pour utilisation dans d'autres parties de l'application
module.exports = mongoose;

