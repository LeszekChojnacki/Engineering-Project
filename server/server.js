const express = require('express')
const mongoose = require('mongoose')

const DBReguests = require('./routes/api/DBRequests')

const app = express()

//DB Config
const db = require('./config/keys').mongoURI

mongoose
.connect(db) 
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

const port = require('./config/keys').port

app.use('/api', DBReguests)

app.listen(port, function(req, res){
    console.log(`Server started on port ${port}...`);
});