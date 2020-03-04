// imports
const express = require('express');
const controller = require('../controllers/home_controller');

// get router from Express
const Router  = express.Router();

// Build route for home.
Router.get('/', controller.home);

// route for add element in todo
Router.get('/add_todo', controller.addToDo);

// route for delete the element in todo
Router.get('/delete_task', controller.deleteToDo);

// Exports the module router
module.exports = Router;