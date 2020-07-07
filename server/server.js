const express = require('express');
const cors = require("cors");
const app = express();

mongoose = require('mongoose');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://127.0.0.1/leBijouWeb', () => {
    console.log('connected to mongodb');
})

app.use(cors());

const mailServer = require("./mail/mailServer.js");
const password = require("./routes/password.js");
const news = require ("./routes/news.js");
const authenticate = require ("./security/authenticate.js");
const protected = require ("./security/protected");

app.use('/contact',mailServer);
app.use("/password",password);
app.use("/news",news);
app.use("/authenticate",authenticate);
app.use("/verifytoken", protected);


const port = 4000
app.listen(port, () => console.log(`listening on port ${port}`))
