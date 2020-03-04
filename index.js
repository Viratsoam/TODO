// imports the require lib
const express = require('express');
const path    = require('path');
const router  = require('./routes/route');

// express app
const app = express();

// set the port
const PORT = 8000;

// set View Engine.
app.set('view engine', 'ejs');

// use the urlencoded
app.use(express.urlencoded({extended: true}));

// static files
app.use(express.static('assets'));

// use the routers
app.use('/', router);

// start the server and listen the port
app.listen(PORT, err=>{
    if(!err)console.log('App is running on PORT: ', PORT);
    else console.log(err);
});