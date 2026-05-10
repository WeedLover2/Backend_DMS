const mongoose = require('mongoose');

const reportListSchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true
    },
    Isdone: {
        type: Boolean,
        required: true,
        default: false
    },
    IsChildFrom: {
        type: String,
        ref: 'Report'
    }
});

module.exports = mongoose.model('ReportList', reportListSchema);