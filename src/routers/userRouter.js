/** @format */

const Router = require('express');
const {
	getAllUsers,
	getEventsFollowed,
} = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/get-all', getAllUsers);
userRouter.get('/get-followed-events', getEventsFollowed);

module.exports = userRouter;
