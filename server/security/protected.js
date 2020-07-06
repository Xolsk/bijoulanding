const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const config = require('../config/jsonConfig.js');

app.set('key', config.key);

const protectedRoute = express.Router();

protectedRoute.use((req, res, next) => {

    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('key'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Invalid Token' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token not provided'
        });
    }
});

module.exports = protectedRoute;