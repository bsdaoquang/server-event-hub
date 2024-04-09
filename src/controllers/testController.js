/** @format */

const asyncHandle = require('express-async-handler');
const PlantModel = require('../models/plantModel');
const CategoryModel = require('../models/categoryModel');

const addNewPlan = asyncHandle(async (req, res) => {
	const body = req.body;

	const plant = await new PlantModel(body);

	plant.save();

	res.status(200).json({
		message: 'Add new plant successfully!!!',
		data: plant,
	});
});

const getAllPlant = asyncHandle(async (req, res) => {
	const items = await PlantModel.find({});

	res.status(200).json({
		message: 'Add new plant successfully!!!',
		data: items,
	});
});
const addCategories = asyncHandle(async (req, res) => {
	const body = req.body;

	const category = await new CategoryModel(body);

	res.status(200).json({
		message: 'Add new category successfully!!!',
		data: category,
	});
});
const getCategories = asyncHandle(async (req, res) => {
	const body = req.body;

	const categories = await CategoryModel.find({});

	res.status(200).json({
		message: 'Add new category successfully!!!',
		data: categories,
	});
});
const getCategoryById = asyncHandle(async (req, res) => {
	const { id } = req.query;

	const item = await CategoryModel.findOne({ id: parseInt(id) });

	res.status(200).json({
		message: 'Add new category successfully!!!',
		data: item,
	});
});
const getPlantByCategoryId = asyncHandle(async (req, res) => {
	const { id } = req.query;

	const items = await PlantModel.find({ categories: { $all: id } });

	res.status(200).json({
		message: 'Add new category successfully!!!',
		data: items,
	});
});

module.exports = {
	addNewPlan,
	getAllPlant,
	addCategories,
	getCategories,
	getCategoryById,
	getPlantByCategoryId,
};
