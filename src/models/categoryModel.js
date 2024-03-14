/** @format */

const { default: mongoose } = require('mongoose');

const CategorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	key: {
		type: String,
		required: true,
	},
	color: {
		type: String,
	},
	description: {
		type: String,
	},
});

const CategoryModel = mongoose.model('category', CategorySchema);
module.exports = CategoryModel;
