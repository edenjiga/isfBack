'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providersSchema = Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    specialty: JSON,
    projectedStartDate: Date,
    employerId: Number,
    providerType: String,
    staffStatus: String,
    assignedTo: Number,
    status: String,
    createdBy: Number,
    createdAt: Date,
    updatedBy: Number,
    updatedAt: Date
});

module.exports = mongoose.model('providers', providersSchema);