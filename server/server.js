const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()

const DBReguests = require('./routes/api/DBRequests')
const authentication = require('./routes/authentication')

const app = express()

app.use(cors())

//DB Config
const db = process.env.NODE_ENV_mongoURI

mongoose
.connect(db) 
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err)) 

const port = process.env.NODE_ENV_port

app.use('/api', DBReguests)
app.use('/api/login', authentication)

app.listen(port, function(req, res){
    console.log(`Server started on port ${port}...`);
});