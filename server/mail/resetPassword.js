const nodemailer = require('nodemailer');
const config = require("../config/emailConfig.js")
const Email = require('email-templates');

const resetPasswordEmail = (token) => {


  const resetLink = `localhost:3000/resetpassword/${token}`

    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.user,
        pass: config.password
      }
    })

    const email = new Email({
      transport: smtpTrans,
      send: true,
      preview: false,
      
    });
  
    // Attempt to send the email
    email.send({
      template: 'resetPassword',
      message: {
        from: 'Le Bijou Password Reset',
        to: 'xolsco@gmail.com',
      },
      locals: {
        link: resetLink
      },
    }).then(() => console.log('email has been sent!'));
  }

  module.exports = resetPasswordEmail;