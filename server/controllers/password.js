const admin = require("../models/passwordSchema.js");
const bcrypt = require('bcrypt');
const sendResetPasswordEmail = require("../mail/resetPasswordEmail.js");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const express = require('express');
const app = express();


class passwordController {

    async changePassword(req, res) {

        try {

            const newPassword = req.body.newPassword;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
            let password = await admin.updateMany({ $set: { password: hashedPassword } });
            res.status(200).send("Password Changed Sucessfully");
        }

        catch (error) {

            res.status(500).send(error);
        }
    }

    async passwordReset(req, res) {

        try {

            const currentPasswordHash= await admin.findOne({id:"password"});

            app.set("personalkey",currentPasswordHash.password);
            const payload = {
                check: true
              };
            const token = jwt.sign(payload, app.get('personalkey'), {
                expiresIn: 1440
              });

            sendResetPasswordEmail(token);
            res.status(200).send(token);

        }

        catch (error) {

            res.status(500).send(error);
        }

    }
}


module.exports = new passwordController;