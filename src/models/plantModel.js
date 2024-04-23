/** @format */

const { default: mongoose } = require('mongoose');

const PlantSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	categories: {
		type: [String],
	},
	size: {
		type: String,
	},
	source: {
		type: String,
	},
	description: {
		type: String,
	},
	state: {
		type: String,
	},
	count: {
		type: String,
	},
	price: {
		type: String,
	},

	photoURL: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
	},
});

const PlantModel = mongoose.model('plant', PlantSchema);
module.exports = PlantModel;
