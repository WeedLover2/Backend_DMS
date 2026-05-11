const Express = require('express');
const router = Express.Router();
const { getUser, createUserByAdmin } = require('../controller/UserController');

router.get('/getMyUserKing', UserController.getUser);
router.post('/fillMyDBking', UserController.createUserByAdmin);

module.exports = router;
