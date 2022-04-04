const router = require('express').Router();
const commonController = require('../controllers/v1/commonController');

/* Report Routes*/
router.get('/', commonController.index)
router.get('/page1', commonController.page)
router.get('/page2', commonController.page)
router.get('/page3', commonController.page)

module.exports = router