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
	updateEvent,
	getEventsByCategoyId,
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
eventRouter.put('/update-event', updateEvent);
eventRouter.get('/get-events-by-categoryid', getEventsByCategoyId);

module.exports = eventRouter;
