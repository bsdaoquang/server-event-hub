/** @format */

const Router = require('express');
const {
	addNewPlan,
	getAllPlant,
	addCategories,
	getCategories,
	getCategoryById,
	getPlantByCategoryId,
} = require('../controllers/testController');

const testRouter = Router();

testRouter.post('/add-new', addNewPlan);
testRouter.get('/get-plants', getAllPlant);
testRouter.post('/add-category', addCategories);
testRouter.get('/categories', getCategories);
testRouter.get('/category', getCategoryById);
testRouter.get('/getAllByCatId', getPlantByCategoryId);

module.exports = testRouter;
