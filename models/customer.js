const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String,
    city: String,
    state: String,
    pinCode: String,
    dateOfBirth: Date,
    dateOfRegistration: Date,
    age: Number
});

module.exports = mongoose.model('customer', customerSchema);
