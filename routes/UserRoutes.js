const Express = require('express');
const router = Express.Router();
const { getUser, createUserByAdmin } = require('../controller/UserController');

router.get('/getMyUserKing', getUser);
router.post('/fillMyDBking', createUserByAdmin);

module.exports = router;