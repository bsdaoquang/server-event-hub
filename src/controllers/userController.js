/** @format */

const asyncHandle = require('express-async-handler');
const UserModel = require('../models/userModel');
const { query } = require('express');
const EventModel = require('../models/eventModel');
const http = require('http');

const getAllUsers = asyncHandle(async (req, res) => {
	const users = await UserModel.find({});

	const data = [];
	users.forEach((item) =>
		data.push({
			email: item.email ?? '',
			name: item.name ?? '',
			id: item.id,
		})
	);

	await handleSendNotification();

	res.status(200).json({
		message: 'Get users successfully!!!',
		data,
	});
});

const getEventsFollowed = asyncHandle(async (req, res) => {
	const { uid } = req.query;

	if (uid) {
		const events = await EventModel.find({ followers: { $all: uid } });

		const ids = [];

		events.forEach((event) => ids.push(event.id));

		res.status(200).json({
			message: 'fafa',
			data: ids,
		});
	} else {
		res.sendStatus(401);
		throw new Error('Missing uid');
	}
});
const getProfile = asyncHandle(async (req, res) => {
	const { uid } = req.query;

	if (uid) {
		const profile = await UserModel.findOne({ _id: uid });

		console.log(profile);

		res.status(200).json({
			message: 'fafa',
			data: {
				createdAt: profile.createdAt,
				updatedAt: profile.updatedAt,
				name: profile.name ?? '',
				givenName: profile.givenName ?? '',
				familyName: profile.familyName ?? '',
				email: profile.email ?? '',
				photoUrl: profile.photoUrl ?? '',
				bio: profile.bio ?? '',
			},
		});
	} else {
		res.sendStatus(401);
		throw new Error('Missing uid');
	}
});

const updateFcmToken = asyncHandle(async (req, res) => {
	const { uid, fcmTokens } = req.body;

	await UserModel.findByIdAndUpdate(uid, {
		fcmTokens,
	});

	res.status(200).json({
		message: 'Fcmtoken updated',
		data: [],
	});
});

const handleSendNotification = async () => {
	var request = require('request');
	var options = {
		method: 'POST',
		url: 'https://fcm.googleapis.com/fcm/send',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'key=AAAAYQVzHAg:APA91bHeOlIP2Ga6OdcOp3_UVnfqSNA32Ddum6-bbj3VFyfA32WGlaZfZ13qLrV6nz20H7k81X0GOy1Y2Qp6LAqFHrfhNB3E8tm9cFG4f2KJ2ehWdFA70PmYALvs1HS0whcyKmtIdpdk',
		},
		body: JSON.stringify({
			registration_ids: [
				'fqkKacfqSFWvJnFBEVsUDT:APA91bGffTunAovCwcdgQuB0eu4dAYrd5S6qVkImlzr96P-7SKasvte2tY3cPCdgqsn82jE1PReOOdcecXFosDBYUnI5L5pazJgPDhMlJjNym1RMHYXhPa4S_qXWFFMO_0koqLPp2DQi',
			],
			notification: {
				title: 'title',
				subtitle: 'sub title',
				body: 'content of message',
				sound: 'default',
			},
			contentAvailable: 'true',
			priority: 'high',
			apns: {
				payload: {
					aps: {
						contentAvailable: 'true',
					},
				},
				headers: {
					'apns-push-type': 'background',
					'apns-priority': '5',
					'apns-topic': '',
				},
			},
		}),
	};
	request(options, function (error, response) {
		if (error) throw new Error(error);
		console.log(response.body);
	});
};

module.exports = { getAllUsers, getEventsFollowed, updateFcmToken, getProfile };
