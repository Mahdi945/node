const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mahdibeyy:3DjzYE2unDQaYb8F@cluster1.4qhnmal.mongodb.net/submitForm')
    .then(() => {
        console.log('connected to db !');
    })
    .catch(() => {
        console.log('error in connection');
    });

module.exports = mongoose;
