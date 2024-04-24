/** @format */
/** @format */

const { default: mongoose } = require('mongoose');

const CategorySchema = new mongoose.Schema({
	title: {
		type: String,
	},
	key: {
		type: Number,
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
