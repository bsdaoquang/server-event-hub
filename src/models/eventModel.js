/** @format */

const { default: mongoose } = require('mongoose');

const EventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	locationTitle: {
		type: String,
		required: true,
	},
	locationAddress: {
		type: String,
		required: true,
	},
	position: {
		type: {
			lat: {
				type: Number,
			},
			long: {
				type: Number,
			},
		},
		required: true,
	},
	photoUrl: {
		type: String,
	},
	users: {
		type: [String],
	},
	authorId: {
		type: String,
		required: true,
	},
	startAt: {
		type: Number,
		required: true,
	},
	endAt: {
		type: Number,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	categories: {
		type: [String],
		required: true,
	},
	date: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
	},
	followers: {
		type: [String],
	},
});

const EventModel = mongoose.model('events', EventSchema);
module.exports = EventModel;
