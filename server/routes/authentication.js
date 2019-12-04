const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

//JWT authentication token
const tokenKey = require('../config/keys').tokenKey

router.post('/', (req, res, next)=>{

    jwt.sign({},tokenKey,(err,token)=>{
        res.json({
            token
        })
    })
})

module.exports = router