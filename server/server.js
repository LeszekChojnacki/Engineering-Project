const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PESEL1');
let db = mongoose.connection;

//Cjeck connection
db.once('open', function(err){
    console.log('connected to MongoDB');
});

//check for DB errors
db.on('error', function(err){
    console.log(err);
});

const port = 5000;

let entity = require('./models/entity');

app.get('/api/db',function(req, res){

    entity.find({},function(err, entitys){
        if(err){
            console.log(err);
        }else{
            res.json(entitys);
        }
    });
});

app.listen(port, function(req, res){
    console.log(`Server started on port ${port}...`);
});