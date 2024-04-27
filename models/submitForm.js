// Import de Mongoose
const mongoose = require('mongoose');

// Définition du schéma de données pour les soumissions de formulaire
const submitFormSchema = new mongoose.Schema({
    nomSociete: {
        type: String,
        required: true 
    },
    telephone: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    adresseSociete: {
        type: String,
        required: false 
    },
    typeMachine: {
        type: String,
        required: true 
    },
    refMachine: {
        type: String,
        required: true 
    },
    descriptionPanne: {
        type: String,
        required: false 
    },
});

// Création du modèle SubmitForm à partir du schéma submitFormSchema
const SubmitForm = mongoose.model('SubmitForm', submitFormSchema);

// Export du modèle pour utilisation dans d'autres parties de l'application
module.exports = SubmitForm;


