var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');

router.post('/user/save', userController.insert);

module.exports = router;