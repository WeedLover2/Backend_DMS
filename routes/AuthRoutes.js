const express = require('express');
const router = express.Router();
const { signIn } = require('../controller/AuthController');

router.post('/signIn', signIn);

module.exports = router;