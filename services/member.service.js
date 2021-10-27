const memberModel = require('../models/member');

exports.getMember = () => {
    return memberModel.find({});
}