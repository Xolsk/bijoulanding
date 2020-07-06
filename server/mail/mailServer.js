const nodemailer = require('nodemailer');

const contactEmail = (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "",
        pass: """
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: "xolsco@gmail.com",
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

  module.exports= contactEmail;