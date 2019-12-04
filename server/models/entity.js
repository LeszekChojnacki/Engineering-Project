let mongoose = require('mongoose');

//entity schema
let entitySchema = mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    KOD_TERYT:{
        type: Number,
        required: true
    },
    WOJEWODZTWO:{
        type: String,
        required: true
    },
    POWIAT: {
        type: String,
        required: true
    },
    GMINA: {
        type: String,
        required: true
    },
    OSOB: {
        type: Number,
        required: true
    },
    KOBIET: {
        type: Number,
        required: true
    },
    MEZCZYZN: {
        type: Number,
        required: true
    },
    PONIZEJ_18_ROKU_ZYCIA: {
        type: Number,
        required: true
    },
    KOBIET_PONIZEJ_18_ROKU_ZYCIA: {
        type: Number,
        required: true
    },
    MEZCZYZN_PONIŻEJ_18_ROKU_ZYCIA: {
        type: Number,
        required: true
    },
    POWYZEJ_18_ROKU_ZYCIA: {
        type: Number,
        required: true
    },
    KOBIET_POWYZEJ_18: {
        type: Number,
        required: true
    },
    MEZCZYZN_POWYZEJ_18_ROKU_ZYCIA: {
        type: Number,
        required: true
    }
});

let entity = module.exports = mongoose.model('entity',entitySchema,'COL_First');