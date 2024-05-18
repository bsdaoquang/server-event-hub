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
	updateEvent,
	getEventsByCategoyId,
	handleAddNewBillDetail,
	handleUpdatePaymentSuccess,
	updateCategory,
	getCategoryDetail,
	joinEvent,
} = require('../controllers/eventController');

const eventRouter = Router();

eventRouter.post('/add-new', addNewEvent);
eventRouter.get('/get-events', getEvents);
eventRouter.post('/update-followes', updateFollowers);
eventRouter.get('/followers', getFollowers);
eventRouter.post('/create-category', createCategory);
eventRouter.get('/get-categories', getCategories);
eventRouter.put('/update-category', updateCategory)
eventRouter.get('/get-category', getCategoryDetail)
eventRouter.get('/get-event', getEventById);
eventRouter.put('/update-event', updateEvent);
eventRouter.get('/get-events-by-categoryid', getEventsByCategoyId);
eventRouter.post('/buy-ticket', handleAddNewBillDetail);
eventRouter.get('/update-payment-success', handleUpdatePaymentSuccess);
eventRouter.get('/join-event', joinEvent);

module.exports = eventRouter;
