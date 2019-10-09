const express = require('express')
const router = express.Router()

//Impoert the entity model
let entity = require('../../models/entity')

// @route   GET api/DBRequests
// @desc    GET all entitys
// @access  Public
router.get('/',function(req, res){

    entity.find({},function(err, entitys){
        if(err){
            console.log(err)
        }else{
            res.json(entitys)
        }
    });
});

module.exports = router