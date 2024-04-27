const express = require('express');

const {getUsers, postUsers, getUser} = require('../controllers/users.controller')

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:username', getUser);

userRouter.post('/', postUsers);

module.exports = userRouter;