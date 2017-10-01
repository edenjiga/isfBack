
var Specialties = require('../models/specialties');

function getSpecialties(req, res) {
    var specialtiesId = req.params.id;

    Specialties.findById(specialtiesId, response(req, res));
}

function saveSpecialties(req, res) {
    var specialties = new Specialties();

    var params = req.body;
    specialties.name = params.name;
    specialties.createdBy = params.createBy;
    specialties.createdAt = params.createAt;
    specialties.updatedBy = params.updatedBy;
    specialties.updatedAt = params.updatedAt;

    specialties.save(response(req, res));
}

function updateSpecialties(req, res) {
    var specialtiesId = req.params.id;
    var update = req.body;
    Specialties.findByIdAndUpdate(specialtiesId, update, response(req, res));
}

function deleteSpecialties(req, res) {
    var specialtiesId = req.params.id;

    Specialties.findByIdAndRemove(specialtiesId, response(req, res));
}

function response(req, res){
    return function(err, specialties){
        if (err) {
            res.status(500).send({ message: err });
            // res.status(500).send({message: 'Internal Server Error'});
        } else {
            if (!specialties) {
                res.status(404).send({ message: 'Not Found' });
            } else {
                res.status(200).send({ specialties: specialties });
            }
        }   
    }
}

module.exports = {
    getSpecialties,
    saveSpecialties,
    deleteSpecialties,
    updateSpecialties

}