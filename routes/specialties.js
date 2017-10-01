'use strict'
'use strict'

var express = require('express');
var specialtiesController = require('../controllers/specialties');
var api = express.Router();

api.get('/specialties/:id', specialtiesController.getSpecialties);
api.post('/specialties/', specialtiesController.saveSpecialties);
api.put('/specialties/:id', specialtiesController.updateSpecialties);
api.delete('/specialties/:id', specialtiesController.deleteSpecialties);

module.exports = api;