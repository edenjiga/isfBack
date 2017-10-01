var Providers = require('../models/providers');
var Specialties = require('../models/specialties');

function getProvidersById(req, res){
    var providersId = req.params.id;

    Providers.findById(providersId, response(req, res));
}

function getProviders(req, res){
    Providers.find(response(req, res));
}

async function saveProviders(req, res){
    var params = req.body;
    // get the Id of specialties recibe by the req
    var specialtiesId = req.body.specialty;

    // find the specialties in the DB
    params.specialty = await Specialties.findById(specialtiesId);
     
    var providers = fillProviders(params);

    providers.save(response(req, res));
}

async function updateProviders(req, res){
    var providersId = req.params.id;
    var update = req.body;

    if(update.specialty){
        specialtiesId = update.specialty;
        update.specialty = await Specialties.findById(specialtiesId);
    }

    Providers.findByIdAndUpdate(providersId, update, response(req,res));
}

function deleteProviders(req, res){
    var providersId = req.params.id;
    
    Providers.findByIdAndRemove(providersId, response(req, res));
}

function fillProviders(params){
    var providers = new Providers();

    providers.firstName = params.firstName;
    providers.lastName = params.lastName;
    providers.middleName = params.middleName;
    providers.email = params.email;
    providers.specialty = params.specialty;
    providers.projectedStartDate = params.projectedStartDate;
    providers.employerId = params.employerId;
    providers.providerType = params.providerType;
    providers.staffStatus = params.staffStatus;
    providers.assignedTo = params.assignedTo;
    providers.status = params.status;
    providers.createdBy = params.createdBy;
    providers.createdAt = params.createdAt;
    providers.updatedBy = params.updatedBy;
    providers.updatedAt = params.updatedAt;
    
    return providers;
}

function response(req, res){
    return function(err, providers){
        if (err) {
            res.status(500).send({ message: err });
        } else {
            if (!providers) {
                res.status(404).send({ message: 'Not Found' });
            } else {
                res.status(200).send({ providers: providers });
            }
        }   
    }
}

module.exports = {
    getProviders,
    getProvidersById,
    saveProviders,
    updateProviders,
    deleteProviders
}
