const nodemailer = require('nodemailer');
const config = require("../config/emailConfig.js")

const contactEmail = (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp",
    port: 465,
    secure: true,
    auth: {
      user: config.user,
      pass: config.password
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: "email here",
    subject: 'Nuevo mensaje desde la página web de Le Bijou',
    text: `Mensaje enviado por ${req.body.name}  ${req.body.lastName} de ${req.body.business} con 
      correo ${req.body.email}. \n ${req.body.text}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error)
      res.send('contact-failure') // Show a page indicating failure
    }
    else {
      res.send('contact-success') // Show a page indicating success
    }
  })
}

module.exports = contactEmail;
