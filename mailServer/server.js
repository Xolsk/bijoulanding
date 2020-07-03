const express = require('express')
const app = express()
const nodemailer = require('nodemailer');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

// POST route from contact form
app.post('/contact', (req, res) => {

  console.log(req.body)

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "redpandamusicbcn@gmail.com",
        pass: "lonewolfandcub"
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
  })

  const port = 4000
app.listen(port, () => console.log(`listening on port ${port}`))
