const user = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createUserByAdmin = async (req,res) => {
    const {email, role, password} = req.body;

    try {
        const user = await User.create({
            email,
            role,
            password,
        });
        
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};