/** @format */

const Router = require('express');
const {
	addNewEvent,
	getEvents,
	updateFollowers,
	getFollowers,
} = require('../controllers/eventController');

const eventRouter = Router();

eventRouter.post('/add-new', addNewEvent);
eventRouter.get('/get-events', getEvents);
eventRouter.post('/update-followes', updateFollowers);
eventRouter.get('/followers', getFollowers);

module.exports = eventRouter;
