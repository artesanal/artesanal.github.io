const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const Contract = require('../models/contract');

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/artesanal_sys', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/contratos', (req, res) => {
    connection((db) => {
        db.collection('contracts')
            .find()
            .toArray()
            .then((contratos) => {
                response.data = contratos;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/contratos/:id', function(req, res, next) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    connection((db) => {
        db.collection('contracts')
            .findOne(details, (err, item) =>{
                if(err){
                    res.send({'error':'an error has occured'});
                }else{
                    res.json(item);
                }
            })
    });
});


router.post('/register/contrato', (req, res, next)=>{
    let newContrato = new Contract({
        name: req.body.name,
        rg: req.body.rg,
        cpf: req.body.cpf,
        tel: req.body.tel,
        dEvento: req.body.dEvento,
        email: req.body.email,
/*
        tipo: req.body.tipo,
        espaco: req.body.espaco,
        end: req.body.end,
        convidados: req.body.convidados,
        duracao: req.body.duracao,
        horaInicio: req.body.horaInicio,

        cerveja: req.body.cerveja,
        agua: this.agua,
        refrigerante: req.body.refrigerante,
        suco: req.body.suco,
        entradas: req.body.entradas,
        gresal: req.body.gresal,
        fritos: req.body.fritos,
        comidinhas: req.body.comidinhas,
        sobremesa: req.body.sobremesa,
        ilha: req.body.ilha,

        tipoPagamento: req.body.tipoPagamento,
        valorP: req.body.valorP
        */
    });
    Contract.addContrato(newContrato, (err, contrato)=>{
        if(err){
            res.json({success: false, msg:'Failed to register User'});
        }else {
            res.json({success:true, msg:'Contract Registered'});
        }
    })
});


module.exports = router;