const express = require('express')
const router = express.Router()

//Impoert the entity model
const verifyToken = require('../verifyToken')
let nameSchema = require('../../db/models/nameSchema')

// @route   GET api/communes/:name
// @desc    GET entitys by name
// @access  Public
router.get('/communes/:name',verifyToken, function(req, res){
    
    nameSchema.getCommunesByName(req.params.name, function(err,communeArr){
        if(err){
            throw err
        }
        res.json(communeArr)
    })
})

// @route   GET api/provinces/:name
// @desc    GET entitys by name aggregated by provinces
// @access  Public
router.get('/provinces/:name',verifyToken, function(req, res){
    
    nameSchema.getProvincesByName(req.params.name, function(err,communeArr){
        if(err){
            throw err
        }
        res.json(communeArr)
    })
});

// @route   GET api/counties/:name
// @desc    GET entitys by name aggregated by counties
// @access  Public
router.get('/counties/:name',verifyToken, function(req, res){
    
    nameSchema.getCountiesByName(req.params.name, function(err,communeArr){
        if(err){
            throw err
        }
        res.json(communeArr)
    })
});

module.exports = router