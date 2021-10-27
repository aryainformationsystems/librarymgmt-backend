const issuesModel = require('../models/issues');

exports.getIssues = () => {
    return issuesModel.find({});
}