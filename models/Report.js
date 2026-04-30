const mongoose = require ('mongoose');

const Report = new mongoose.Schema({
    title: {
        type: String [maxLength: 30],
        required: [true, 'title is required'],
        sparse: true
    },
    Description: {
        type: String,
        required: [true, 'description is required']
    },
    Date: {
        type: Date,
        default: Date.now
    },
    CreatedBy: {
        type: String,
        ref: 'User'
    },
    Isfinished: {
        type: Boolean,
        default: false,
        required: true 
    }
})

module.exports = mongoose.model('Report', ReportSchema);