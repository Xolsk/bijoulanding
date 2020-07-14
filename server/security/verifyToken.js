const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const config = require('../config/jwtConfig.js');


app.set('key', config.key);

const protectedRoute = express.Router();

protectedRoute.use( (req, res) => {


    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('key'), (err, decoded) => {
            if (err) {
                return res.status(401).json({ mensaje: 'Invalid Token' });
            } else {
                req.decoded = decoded;
                res.status(200).send({mensaje:"Access Granted"});
            }
        });
    } else {
        res.status(401).send({
            mensaje: 'Token not provided'
        });
    }
});

module.exports = protectedRoute;