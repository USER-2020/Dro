'use stict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Cargar archivo de rutas
var contact_routes = require('./routes/contact');

//rutas
app.use('/api', contact_routes);

//middlewares
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//exportar
module.exports = app;