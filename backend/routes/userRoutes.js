const express = require('express');

const {getUsers, registerUser, getUser, loginUser} = require('../controllers/users.controller')

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:username', getUser);

userRouter.post('/auth/register', registerUser);

userRouter.post('/auth/login', loginUser);

module.exports = userRouter;