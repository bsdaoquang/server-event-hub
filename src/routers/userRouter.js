/** @format */

const Router = require('express');
const {
	getAllUsers,
	getEventsFollowed,
	getUserDetail,
} = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/get-all', getAllUsers);
userRouter.get('/get-followed-events', getEventsFollowed);
userRouter.get('/user-detail', getUserDetail);

module.exports = userRouter;
