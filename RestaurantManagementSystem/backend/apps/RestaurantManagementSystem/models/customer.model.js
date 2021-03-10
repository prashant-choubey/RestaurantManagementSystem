const mongoose = require('../3p/node_modules/mongoose');

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

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;