/** @format */

const Router = require('express');
const { addNewEvent } = require('../controllers/eventController');

const eventRouter = Router();

eventRouter.post('/add-new', addNewEvent);

module.exports = eventRouter;
