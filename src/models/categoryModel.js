/** @format */
/** @format */

const { default: mongoose } = require('mongoose');

const CategorySchema = new mongoose.Schema({
	title: {
		type: String,
	},
	key: {
		type: String,
	},
	iconColor: {
		type: String
	},
	iconWhite: {
		type: String,
	},
	color: {
		type: String
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

const CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;
