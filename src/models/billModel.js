/** @format */

const { default: mongoose } = require('mongoose');

const BillSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	createdBy: {
		type: String,
		require: true,
	},
	eventId: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	status: {
		type: String,
		default: 'pending',
	},
	authorId: {
		type: String,
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
	},
});

const BillModel = mongoose.model('bills', BillSchema);
module.exports = BillModel;
