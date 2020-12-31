const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

/* GET all products. */
router.get('/', indexController.index);

module.exports = router;
