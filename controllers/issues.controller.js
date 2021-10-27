const issuesService = require('../services/issues.service');
const apiUtil = require('../util/api.util');

exports.getIssues = (req, res) => {
    issuesService.getIssues().then(result => {
        apiUtil.sendResponse(result, res);
    }).catch(err => {
        console.log(err);
        apiUtil.handleError(err, res);
    });
}