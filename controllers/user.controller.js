const userService = require('../services/user.service');
const apiUtil = require('../util/api.util');

exports.getUser = (req, res) => {
    userService.getUser().then(result => {
        apiUtil.sendResponse(result, res);
    }).catch(err => {
        console.log(err);
        apiUtil.handleError(err, res);
    });
}