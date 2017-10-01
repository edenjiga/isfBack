'use strict'

var express = require('express');
var providersController = require('../controllers/providers');
var api = express.Router();

api.get('/providers/:id', providersController.getProvidersById);
api.get('/providers/', providersController.getProviders);
api.post('/providers/', providersController.saveProviders);
api.put('/providers/:id', providersController.updateProviders);
api.delete('/providers/:id', providersController.deleteProviders);

module.exports = api;