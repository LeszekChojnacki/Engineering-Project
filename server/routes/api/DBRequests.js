const express = require('express')
const router = express.Router()

//Impoert the entity model
let entity = require('../../models/entity')
const verifyToken = require('../verifyToken')

// @route   GET api/DBRequests
// @desc    GET all entitys
// @access  Public
router.get('/',verifyToken,function(req, res){

    entity.find({},function(err, entitys){
        if(err){
            console.log(err)
        }else{
            res.json(entitys)
        }
    });
});

module.exports = router