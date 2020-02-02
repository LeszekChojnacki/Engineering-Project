let mongoose = require('mongoose')

//entity schema

let schema = mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    SURNAME:{
        type: String,
        required: true
    },
    SEX:{
        type: String,
        required: true
    },
    TERYT: {
        type: String,
        required: true
    },
    NUMBER: {
        type: Number,
        required: true
    },
    COMMUNES: {
        type: String,
        required: true
    },
    COUNTIES: {
        type: String,
        required: true
    },
    PROVINCES: {
        type: String,
        required: true
    }
})

let nameSchema = module.exports = mongoose.model('nameSchema',schema,'SurName')

//Get number of communes by name
module.exports.getCommunesByName = function(name, callback){
    nameSchema.find(
        {SURNAME:name}, 
        {_id:0, SURNAME:0, SEX:0, COMMUNES:0,COUNTIES:0,PROVINCES:0}, 
    callback)
}

//Get number of provinces by name
module.exports.getProvincesByName = function(name,callback){
    nameSchema.aggregate([
        {$match:{SURNAME:name}},
        {$group:{_id:"$PROVINCES",count:{$sum:"$NUMBER"}}}
    ],
    callback)
}

//Get number of counties by name
module.exports.getCountiesByName = function(name, callback){
    nameSchema.aggregate([
        {$match:{SURNAME:name}},
        {$group:{_id:"$COUNTIES",count:{$sum:"$NUMBER"}}}
    ],
    callback)
}