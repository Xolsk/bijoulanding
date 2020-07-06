const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/news.js');
const protectedRoute = require("../security/protected.js");


router.get('/all',protectedRoute, controller.find);

router.post('/create', controller.create); 

router.post('/remove', controller.remove); 

router.post('/update', controller.update); 

router.post('/delete',controller.delete);

module.exports = router;

