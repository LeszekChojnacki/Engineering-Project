const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
require('dotenv').config()

//JWT authentication token
const tokenKey = process.env.NODE_ENV_tokenKey

router.post('/', (req, res, next)=>{

    jwt.sign({},tokenKey,(err,token)=>{
        res.json({
            token
        })
    })
})

module.exports = router