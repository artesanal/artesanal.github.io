const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//test mongo connection if is working
mongoose.connection.on('connected', ()=>{
   console.log('Connected to data base '+config.database);
});
//test mongo connection if it has an error
mongoose.connection.on('error', (err)=>{
    console.log('Database error '+err);
});

const app = express();

const contratos = require('./routes/contratos');
const users = require('./routes/users');
const api = require('./routes/api');

//variable for port
const port = 3000;

// avoid user access any page without authentication
app.use(cors());


//Static folders (frontEnd | angular)
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



//passport Middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

//Index route
app.get('/', (req,res) =>{
    res.send('Rodando');
});

app.use('/users', users);
app.use('/contracts', contratos);
app.use('/api', api);
/*
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
*/
//listen the port | Start Server
app.listen(port, () =>{
    console.log('server startd on port '+port);
});
