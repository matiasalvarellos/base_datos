const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

/* GET all products. */
router.get('/', indexController.index);

router.get("/detail/:id", indexController.show);

router.get('/create', indexController.create);

router.post("/create", indexController.store);

router.get("/edit/:id", indexController.edit);

router.post("/edit/:id", indexController.update);

router.post("/delete/:id", indexController.destroy);

module.exports = router;
