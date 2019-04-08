// third-party libraries
import express from 'express';

// controller
import todoController from './todoController';

// route object
const todoRoute = express.Router();

// default routes for todos
todoRoute.route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

// route for a single todo item
todoRoute.route('/:id')
  .get(todoController.getTodo)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

export default todoRoute;
