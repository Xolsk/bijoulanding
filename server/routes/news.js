const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/news.js');
const protectedRoute = require("../security/protected.js");


router.post('/create',protectedRoute, controller.create); 

router.get('/read',protectedRoute,controller.read);

// router.post('/update', controller.update); 

router.post('/delete',protectedRoute, controller.delete); 

module.exports = router;

