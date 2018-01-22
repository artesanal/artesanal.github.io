const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//user schema
const ContratoSchema = mongoose.Schema({
    name:{type: String, required: true},
    rg:{ type: Number, required: true},
    cpf:{type: Number, required:true},
    tel: {type: Number, required:true},
    dEvento:{type:String, required: true},
    email: {type: String, required:true},
/*

    tipo:{type:String, required:true},
    espaco:{type: String, required: true},
    end: {type: String, required:true},
    convidados: {type: Number, required:true},
    duracao: {type: Number, required:true},
    horaInicio: {type :String, required:true},

    cerveja: {type :String, required:true},
    agua: {type :String, required:true},
    refrigerante: {type :String, required:true},
    suco: {type :String, required:true},
    entradas: {type :String, required:true},
    gresal: {type :String, required:true},
    fritos: {type :String, required:true},
    comidinhas: {type :String, required:true},
    sobremesa: {type :String, required:true},
    ilha: {type :String, required:true},

    tipoPagamento: {type :String, required:true},
    valorP: {type :Number, required:true},
*/

});

const Contract = module.exports = mongoose.model('Contract', ContratoSchema);



module.exports.getContratoAll = function (req, res) {
    connection((db) => {
        db.collection('contracts')
            .find()
            .toArray()
            .then((contratos) => {
                response.data = contratos;
                res.json(response);
            });
    });
    console.log(response);

};


module.exports.getContratoById = function (id, callback) {
    Contract.findById(id, callback);
};

module.exports.addContrato = function (newContrato, callback){
    newContrato.save(callback);
};