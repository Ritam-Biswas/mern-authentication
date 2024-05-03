const jwt = require('jsonwebtoken');

const User = require('../models/users.model')

const verifyAuthToken = async (req, res, next) => {

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message: 'No token found'})
    }

    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({username: decodedToken.username})
        if(!user){
            throw new Error('User not found')
        }
        req.user = user;
        next();
    }catch(error){
        console.log('Error Verifying user\n', error);
        return res.status(401).json({message: 'Unauthorized'})
    }

}

module.exports = verifyAuthToken