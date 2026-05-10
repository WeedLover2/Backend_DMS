const user = require('../models/User');

exports.signIn = async (req, res) => {
    console.log('Login request body:', req.body);
    console.log('Login request headers:', req.headers);

    const { Email, password } = req.body;

  // Validasi input kosong
    if (!Email || !password) {
        console.log('Missing Email or password');
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Cek apakah pengguna terdaftar 
        console.log('Searching for user with email:', Email);
        const user = await user.findOne({ Email: { $regex: `^${Email.trim()}$`, $options: 'i' } });
        console.log('User found in database:', user ? 'YES' : 'NO');
        
        if (user) {
            console.log('User data:', {
                id: user._id,
                Email: user.Email,
                role: user.role,
                hasPassword: !!user.password
            });
        }
        
        if (!user) {
            console.log('User not found in database');
            return res.status(401).json({ message: 'User not registered' });
        }

        // Cek password dengan logging
        console.log('Comparing passwords...');
        console.log('Input password:', password);
        console.log('Stored password:', user.password);
        console.log('Passwords match:', user.password === password);
        
        if (user.password !== password) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Email and password did not match' });
        }

        console.log('Login successful for user:', user.Email);

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Server error', error: error.message });
        }
};