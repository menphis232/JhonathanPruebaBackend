
const express = require("express");
const app = express();
var cors = require('cors');

const route = require('./routes');
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(route);

app.listen(port)
console.log('API escuchando en el puerto ' + port)