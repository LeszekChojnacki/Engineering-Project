const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){

    // Get token
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        // Split the token
        const bearer = bearerHeader.split(' ')
        // Get the token
        const bearerToken = bearer[1]
        // Set the token
        req.token = bearerToken
        // Next middleware
        next()
    }else{
        // Forbidden
        res.sendStatus(403)
    }
}

module.exports = verifyToken