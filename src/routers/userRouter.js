/** @format */

const Router = require('express');
const { getAllUsers } = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/get-all', getAllUsers);

module.exports = userRouter;
