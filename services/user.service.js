const userModel = require('../models/user');

exports.getUser = () => {
    return userModel.find({});
}