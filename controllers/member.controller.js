const memberService = require('../services/member.service');
const apiUtil = require('../util/api.util');

exports.getMember = (req, res) => {
    memberService.getMember().then(result => {
        apiUtil.sendResponse(result, res);
    }).catch(err => {
        console.log(err);
        apiUtil.handleError(err, res);
    });
}