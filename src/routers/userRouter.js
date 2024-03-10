/** @format */

const Router = require('express');
const {
	getAllUsers,
	getEventsFollowed,
	updateFcmToken,
} = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/get-all', getAllUsers);
userRouter.get('/get-followed-events', getEventsFollowed);
userRouter.post('/update-fcmtoken', updateFcmToken);

module.exports = userRouter;
