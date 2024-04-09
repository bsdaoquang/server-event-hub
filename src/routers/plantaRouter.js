/** @format */

const Router = require('express');
const {
	addNewPlan,
	getAllPlant,
	addCategories,
	getCategories,
	getCategoryById,
} = require('../controllers/testController');

const testRouter = Router();

testRouter.post('/add-new', addNewPlan);
testRouter.get('/get-plants', getAllPlant);
testRouter.post('/add-category', addCategories);
testRouter.get('/categories', getCategories);
testRouter.get('/category', getCategoryById);

module.exports = testRouter;
