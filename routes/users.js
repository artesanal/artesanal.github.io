const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Contract = require('../models/contract');

//register router
router.post('/register', (req, res, next)=>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user)=>{
        if(err){
            res.json({success: false, msg:'Failed to register User'});
        }else {
            res.json({success:true, msg:'User Registered'});
        }
    })
});

//Authenticate
router.post('/authenticate', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user)=>{
        if(err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found!'})
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 86400 //one day
                });
                res.json({
                    success: true,
                    token: 'Bearer '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'})
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

//validator router
router.get('/validate', (req, res, next)=>{
    res.send('VALIDATE')
});

module.exports = router;


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