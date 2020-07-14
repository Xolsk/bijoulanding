const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const config = require('../config/jwtConfig.js');
const admin = require("../models/passwordSchema.js");

app.set('key', config.key);

const protectedRoute = express.Router();

protectedRoute.use(async (req, res, next) => {

    const currentPasswordHash = await admin.findOne({ id: "password" });

    app.set("personalkey", currentPasswordHash.password);


    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('key'), (err, decoded) => {
            if (err) {
                jwt.verify(token, app.get('personalkey'), (err, decoded) => {
                    if (err) {
                        res.status(401).send({mensaje:"Invalid Token"})
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({
            mensaje: 'Token not provided'
        });
    }
});

module.exports = protectedRoute;