let mongoose = require('mongoose')

//entity schema

let schema = mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    IMIĘ:{
        type: String,
        required: true
    },
    PŁEĆ:{
        type: String,
        required: true
    },
    TERYT: {
        type: String,
        required: true
    },
    LICZBA: {
        type: Number,
        required: true
    },
    GMINA: {
        type: String,
        required: true
    },
    POWIAT: {
        type: String,
        required: true
    },
    WOJEWÓDZTWO: {
        type: String,
        required: true
    }
});

let nameSchema = module.exports = mongoose.model('nameSchema',schema,'FirstName')

//Get number of communes by name
module.exports.getCommunesByName = function(name, callback){
    nameSchema.find(
        {IMIĘ:name}, 
        {_id:0, IMIĘ:0, PŁEĆ:0, GMINA:0,POWIAT:0,WOJEWÓDZTWO:0}, 
    callback)
}

//Get number of provinces by name
module.exports.getProvincesByName = function(name,callback){
    nameSchema.aggregate([
        {$match:{IMIĘ:name}},
        {$group:{_id:"$WOJEWÓDZTWO",count:{$sum:"$LICZBA"}}}
    ],
    callback)
}

//Get number of counties by name
module.exports.getCountiesByName = function(name, callback){
    nameSchema.aggregate([
        {$match:{IMIĘ:name}},
        {$group:{_id:"$POWIAT",count:{$sum:"$LICZBA"}}}
    ],
    callback)
}