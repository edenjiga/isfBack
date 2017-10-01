'use strict'

var mongoose = require('mongoose');

var app = require('./app');

//port of server backend;
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://edgarj:edgarj@ds155634.mlab.com:55634/evercheck-test-9',(err, res) =>{
    
        if(err){
            throw err;
        }else{

            app.listen(port, function(){
                console.log("Server listening http://localhost:"+port);
            });
        }
    });