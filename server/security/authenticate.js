const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const config = require('../config/jsonConfig.js');
const admin = require("../models/passwordSchema.js");
const bcrypt = require("bcrypt");

app.set('key', config.key);

const authenticate = async (req, res) => {

  const receivedPassword=req.body.password;

    const activePassword = await admin.findOne({id:"password"});
    const match = await bcrypt.compare(receivedPassword, activePassword.password);

    if (match) {
      const payload = {
        check: true
      };
      const token = jwt.sign(payload, app.get('key'), {
        expiresIn: 1440
      });
      res.status(200).json({
        mensaje: 'Correct authentication',
        token: token
      });
    } else {
      res.status(401).json({ mensaje: "Wrong password" })
    }
  }



module.exports = authenticate;