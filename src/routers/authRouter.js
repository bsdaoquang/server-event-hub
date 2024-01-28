/** @format */

const Router = require('express');
const {
	register,
	login,
	verification,
	forgotPassword,
} = require('../controllers/authController');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/verification', verification);
authRouter.post('/forgotPassword', forgotPassword);

module.exports = authRouter;
