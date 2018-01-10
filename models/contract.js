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

module.exports.getContratoAll = function (name, callback) {
    const query = {name: name};
    Contract.find(query, callback);

};

module.exports.getContratoById = function (id, callback) {
    Contract.findById(id, callback);
};

module.exports.addContrato = function (newContrato, callback){
    newContrato.save(callback);
};