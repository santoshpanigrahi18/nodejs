const router = require('express').Router();
const authController = require('../controllers/v1/authController');

router.get('/test', authController.test)

module.exports = router