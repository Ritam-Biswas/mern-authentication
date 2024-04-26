const express = require('express');

const {getUsers, postUsers} = require('../controllers/users.controller')

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.post('/', postUsers);

module.exports = userRouter;