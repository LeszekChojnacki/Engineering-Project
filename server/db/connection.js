require('dotenv').config({path:__dirname+'./../.env'})
const mongoose = require('mongoose')

//DB Config
const db = process.env.NODE_ENV_mongoURI

function connection(){
    return new Promise(()=>{

        if(process.env.NODE_ENV ==='test'){
           const Mockgoose = require('mockgoose').Mockgoose
           const mockgoose = new Mockgoose(mongoose)

           mockgoose.prepareStorage()
            .then(()=>{
                mongoose
                    .connect(db,{useUnifiedTopology: true, useNewUrlParser: true}) 
                    .then(()=> console.log('MongoDB Connected Mock...'))
                    .catch(err => console.log(err))
            })
        }else{
            mongoose
            .connect(db,{useUnifiedTopology: true, useNewUrlParser: true}) 
            .then(()=> console.log('MongoDB Connected...'))
            .catch(err => console.log(err))
        }
    })
}

function close(){
    return mongoose.disconnect()
}

module.exports = {connection, close}