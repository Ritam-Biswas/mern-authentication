const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('../models/users.model')

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        if(users){
            return res.status(200).json(users);
        }else{
            return res.status(404).json({message:'No users found'})
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
            return res.status(200).json(user);
        }else{
            return res.status(404).json({message:'no user found'});
        }
    }catch(error){
        console.error('Error fetching user\n', error);  
    }
}

const registerUser = async (req, res) => {
    const {username, password, confirmPassword, name, address, job} = req.body;

    if(password != confirmPassword){
        return res.status(400).json({message:'Passwords do not match'});
    }

    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username,
            password: hashPassword,
            name,
            address,
            job
        })
        return res.status(201).json(user);
    }catch(error){
        console.error('Error registering user\n', error);
    }
}

const loginUser = async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({username});
        const loginSuccess = await bcrypt.compare(password, user.password);
        if(loginSuccess){
            const {username, name} = user;
            const authToken = jwt.sign({username, name}, process.env.JWT_SECRET);
            res.cookie('authToken', authToken, {maxAge: 86400, httpOnly: false});
            res.status(200).json({message: 'login successfull', authToken});
        }
    }catch(error){
        console.error('Error login in\n', error);
    }
  
}

module.exports = {getUsers, registerUser, getUser, loginUser};