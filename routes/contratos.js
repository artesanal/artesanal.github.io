const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Contract = require('../models/contract');

//register Contracts
router.post('/register/contrato', (req, res, next)=>{
    let newContrato = new Contract({
        name: req.body.name,
        rg: req.body.rg,
        cpf: req.body.cpf,
        tipo: req.body.tipo,
        espaco: req.body.espaco
    });
    Contract.addContrato(newContrato, (err, contrato)=>{
        if(err){
            res.json({success: false, msg:'Failed to register User'});
        }else {
            res.json({success:true, msg:'User Registered'});
        }
    })
});
router.get('/eventos', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({contrato: req.contrato});
});

router.post('/contratos', (req, res, next)=>{

    Contract.getContratoAll( (err, contrato)=>{
        if(err) throw err;
        if (contrato){
            res.json({
                success: true,
                contrato: {
                    id: contrato._id,
                    name: contrato.name,
                    rg: contrato.rg,
                    cpf: contrato.cpf,
                    tipo: contrato.tipo,
                    espaco: contrato.espaco
                }
            });
        } else {
            return res.json({success: false, msg: 'contrato not found!'})
        }
        console.log(contrato);
    });
});

module.exports = router;

