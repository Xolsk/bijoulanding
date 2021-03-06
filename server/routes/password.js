const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/password.js');
const protectedRoute = require ("../security/protectedRoute.js");

router.post("/changepassword", protectedRoute, controller.changePassword);

 router.post ("/passwordreset", controller.passwordReset);

module.exports=router;