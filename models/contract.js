const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const ContratoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rg:{
        type: Number,
        required: true
    },
    cpf:{
        type: Number,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    espaco:{
       type: String,
       required: true
    }

});


const Contract = module.exports = mongoose.model('Contract', ContratoSchema);

module.exports.getContratoAll = Contract.find({}, function(err, contratos) {
    if (err) throw err;
    //console.log(contratos);
});

/*
module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
};*/

module.exports.addContrato = function (newContrato, callback){
    newContrato.save(callback);
};