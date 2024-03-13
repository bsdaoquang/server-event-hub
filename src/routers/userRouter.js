/** @format */

const Router = require('express');
const {
	getAllUsers,
	getEventsFollowed,
	updateFcmToken,
	getProfile,
	getFollowes,
	updateProfile,
} = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/get-all', getAllUsers);
userRouter.get('/get-followed-events', getEventsFollowed);
userRouter.post('/update-fcmtoken', updateFcmToken);
userRouter.get('/get-profile', getProfile);
userRouter.get('/get-followers', getFollowes);
userRouter.put('/update-profile', updateProfile);

module.exports = userRouter;
