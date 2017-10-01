'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// load Routes
var specialties_routes = require('./routes/specialties');
var providers_routes = require('./routes/providers');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Base Routes
app.use('/api', specialties_routes);
app.use('/api', providers_routes);

app.get('/test', function(req, res){
	res.status(200).send({message:"work"});
});

module.exports = app;