var express = require('express');
var router = express.Router();
var pageController = require('../controllers/page.js');

router.get('/', pageController.index);
router.get('/index', pageController.index);

module.exports = router;