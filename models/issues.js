const mongoose = require('mongoose');

const issuesSchema = mongoose.Schema({
    dateOfIssue: Date,
    book: String,
    member: String,
    dateOfReturn: Date,
    dateOfActualReturn: Date,
    fine: Number
});

module.exports = mongoose.model('issues', issuesSchema);
