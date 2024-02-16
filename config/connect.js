const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/submitForm')
    .then(() => {
        console.log('connected to db !');
    })
    .catch(() => {
        console.log('error in connection');
    });

module.exports = mongoose;
