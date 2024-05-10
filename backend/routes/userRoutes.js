const express = require('express');

const {getUsers, registerUser, getUser, loginUser, verifyUser} = require('../controllers/users.controller')
const verifyAuthToken = require('../middlewares/auth')

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:username', getUser);

userRouter.post('/auth/register', registerUser);

userRouter.post('/auth/login', loginUser);

userRouter.post('/auth/verifyuser', verifyAuthToken,  verifyUser);

module.exports = userRouter;