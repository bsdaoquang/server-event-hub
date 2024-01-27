/** @format */

const UserModel = require('../models/userModel');
const bcryp = require('bcrypt');
const asyncHandle = require('express-async-handler');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const nodemailerConfig = process.env.PRODUCTION
	? {
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: process.env.USERNAME_EMAIL,
				pass: process.env.PASSWORD_EMAIL,
			},
	  }
	: {
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: 'aylin.steuber45@ethereal.email',
				pass: 's1R7aDHH3dh4G3BZzd',
			},
	  };

const transporter = nodemailer.createTransport(nodemailerConfig);

const getJsonWebToken = async (email, id) => {
	const payload = {
		email,
		id,
	};
	const token = jwt.sign(payload, process.env.SECRET_KEY, {
		expiresIn: '7d',
	});

	return token;
};

const handleSendMail = async (val, email) => {
	try {
		const result = await transporter.sendMail({
			from: `"Support EventHub Appplication" <aylin.steuber45@ethereal.email>`,
			to: email,
			subject: 'Verification email code',
			text: 'Your code to verification email',
			html: '<h1>1234</h1>',
		});

		console.log(result);
	} catch (error) {
		console.log(`Can not send email ${error}`);
	}
};

const verification = asyncHandle(async (req, res) => {
	const { email } = req.body;

	await handleSendMail('', email);

	res.send('fafs');
});

const register = asyncHandle(async (req, res) => {
	const { email, fullname, password } = req.body;

	const existingUser = await UserModel.findOne({ email });

	if (existingUser) {
		res.status(400);
		throw new Error('User has already exist!!!');
	}

	const salt = await bcryp.genSalt(10);
	const hashedPassword = await bcryp.hash(password, salt);

	const newUser = new UserModel({
		email,
		fullname: fullname ?? '',
		password: hashedPassword,
	});

	await newUser.save();

	res.status(200).json({
		message: 'Register new user successfully',
		data: {
			email: newUser.email,
			id: newUser.id,
			accesstoken: await getJsonWebToken(email, newUser.id),
		},
	});
});

const login = asyncHandle(async (req, res) => {
	const { email, password } = req.body;

	const existingUser = await UserModel.findOne({ email });

	if (!existingUser) {
		res.status(403);
		throw new Error('User not found!!!');
	}

	const isMatchPassword = await bcryp.compare(password, existingUser.password);

	if (!isMatchPassword) {
		res.status(401);
		throw new Error('Email or Password is not correct!');
	}

	res.status(200).json({
		message: 'Login successfully',
		data: {
			id: existingUser.id,
			email: existingUser.email,
			accesstoken: await getJsonWebToken(email, existingUser.id),
		},
	});
});

module.exports = {
	register,
	login,
	verification,
};
