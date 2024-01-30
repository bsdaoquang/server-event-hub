/** @format */

const { mongoose } = require('mongoose');

/** @format */
require('dotenv').config();

const dbUrl = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fvn8vck.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(dbUrl);

		console.log(`Connect to mongo db successfully!!!`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
