const mongoose = require('mongoose');

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

const SubmitForm = mongoose.model('SubmitForm', submitFormSchema);

module.exports = SubmitForm;


