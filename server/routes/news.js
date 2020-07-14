const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/news.js');
const protectedRoute = require("../security/protectedRoute.js");


router.post('/create',protectedRoute, controller.create); 

router.get('/read',controller.read);

 router.post('/savenew', controller.savenew); 

router.post('/delete',protectedRoute, controller.delete); 

module.exports = router;

