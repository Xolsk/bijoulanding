const nodemailer = require('nodemailer');
const config = require("../config/emailConfig.js")

const resetPasswordEmail = (token) => {


  const resetLink = `localhost:3000/resetpassword:${token}`

    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
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
      to: "xolsco@gmail.com",
      subject: 'Password reset solicitado para la web de Le Bijou',
      text: `Alguien ha solicitado un cambio de password para la web de Le Bijou. Si no es así ignora este email. En caso contrario, dale click al sigiente link \n ${resetLink}`
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

  module.exports = resetPasswordEmail;