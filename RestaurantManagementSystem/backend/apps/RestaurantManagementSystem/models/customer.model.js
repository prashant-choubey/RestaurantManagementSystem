const mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    username: {
        type: String
    },
    passward: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    }
});

mongoose.model('Customer', customerSchema);