const express = require('express');
const cors = require("cors");
const app = express();

mongoose = require('mongoose');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://127.0.0.1/leBijouWeb',{ useUnifiedTopology: true,useNewUrlParser: true, } ,() => {
    console.log('connected to mongodb');
})
mongoose.set('useFindAndModify', false);

app.use(cors());

const mailServer = require("./mail/contactEmail.js");
const password = require("./routes/password.js");
const news = require ("./routes/news.js");
const authenticate = require ("./security/authenticate.js");
const verifyToken = require ("./security/verifyToken");

app.use('/contact',mailServer);
app.use("/password",password);
app.use("/news",news);
app.use("/authenticate",authenticate);
app.use("/verifytoken", verifyToken);

const port = 4000
app.listen(port, () => console.log(`listening on port ${port}`))
