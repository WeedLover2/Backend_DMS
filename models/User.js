const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: [true, 'Email is required'],
        sparse: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: [true, 'Role is Required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: function(value) {
                return value.length >= 8 && /\d/.test(value);
            },
            message: 'Password must be at least 8 characters and contain a number'
        }
    },
});

module.exports = mongoose.model('User', userSchema);