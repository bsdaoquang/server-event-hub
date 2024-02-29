/** @format */

const asyncHandle = require('express-async-handler');
const EventModel = require('../models/eventModel');

const addNewEvent = asyncHandle(async (req, res) => {
	const body = req.body;

	if (body) {
		const newEvent = new EventModel(body);

		await newEvent.save();

		res.status(200).json({
			message: 'Add new Event successfully!!!',
			data: newEvent,
		});
	} else {
		res.status(401);
		throw new Error('Event data not found!!!');
	}
});

module.exports = { addNewEvent };
