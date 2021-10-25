const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    dateofbirth: Date,
});

module.exports = mongoose.model('member', memberSchema);