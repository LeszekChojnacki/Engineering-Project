const express = require('express')
var cors = require('cors')
require('dotenv').config({path:__dirname+'./../.env'})

const DBReguests = require('./routes/api/DBRequests')
const authentication = require('./routes/authentication')
const db = require('./db/connection')

const port = process.env.NODE_ENV_port
const app = express()

app.use(cors())

db.connection()

app.use('/api', DBReguests)

//Used for generatin a single connection token
app.use('/api/login', authentication)

app.listen(port, function(req, res){
    console.log(`Server started on port ${port}...`);
});

module.exports = app