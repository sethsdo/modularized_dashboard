"use strict"

const express = require('express')
const path = require("path")

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session');

app.use(session({ secret: 'expresspasskey' }));

app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');

routes_setter(app);



app.listen(8000, function () {
    console.log("listening on port 8000");
})