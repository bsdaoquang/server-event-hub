/** @format */

const Router = require('express');
const {
	addNewEvent,
	getEvents,
	updateFollowers,
	getFollowers,
	createCategory,
	getCategories,
	getEventById,
	searchEvents,
} = require('../controllers/eventController');

const eventRouter = Router();

eventRouter.post('/add-new', addNewEvent);
eventRouter.get('/get-events', getEvents);
eventRouter.post('/update-followes', updateFollowers);
eventRouter.get('/followers', getFollowers);
eventRouter.post('/create-category', createCategory);
eventRouter.get('/get-categories', getCategories);
eventRouter.get('/get-event', getEventById);
eventRouter.get('/search-events', searchEvents);

module.exports = eventRouter;
