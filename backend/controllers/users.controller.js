const User = require('../models/users.model')

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        if(users){
            res.status(200).json(users);
        }else{
            res.status(404).json({message:'No users found'})
        }
    }catch(error){
        console.error('Error fetching all users\n', error);
    }
}

const getUser = async (req, res) => {
    const username = req.params.username;
    try{
        const user = await User.findOne({username});
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message:'no user found'});
        }
    }catch(error){
        console.error('Error fetching user\n', error);  
    }
}

const postUsers = async (req, res) => {
    const user = req.body;

    try{
        const newUser = await User.create(user)
        res.status(201).json(newUser);
    }catch(error){
        console.log('Error creating user\n', error);
    }
}

module.exports = {getUsers, postUsers, getUser};