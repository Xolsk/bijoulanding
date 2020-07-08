const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const admin = require("../models/passwordSchema.js");


const protectedEmailReset = express.Router();

protectedEmailReset.use( async (req, res) => {

    const currentPasswordHash= await admin.findOne({id:"password"});

    app.set("personalkey",currentPasswordHash.password);

    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('personalkey'), (err, decoded) => {
            if (err) {
                return res.status(401).json({ mensaje: 'Invalid Token' });
            } else {
                req.decoded = decoded;
                res.status(200).send("Access Granted");
            }
        });
    } else {
        res.status(401).send({
            mensaje: 'Token not provided'
        });
    }
});

module.exports = protectedEmailReset;