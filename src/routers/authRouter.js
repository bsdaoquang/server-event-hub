/** @format */

const Router = require('express');
const { register } = require('../controllers/authController');

const authRouter = Router();

authRouter.post('/register', register);

module.exports = authRouter;
