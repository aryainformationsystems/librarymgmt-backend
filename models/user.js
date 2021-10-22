const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    contactNumber: String,
});

module.exports = mongoose.model('user', userSchema);