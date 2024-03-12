/** @format */

const Router = require('express');
const {
	getAllUsers,
	getEventsFollowed,
	updateFcmToken,
	getProfile,
} = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/get-all', getAllUsers);
userRouter.get('/get-followed-events', getEventsFollowed);
userRouter.post('/update-fcmtoken', updateFcmToken);
userRouter.get('/get-profile', getProfile);

module.exports = userRouter;
