// third-party libraries
import express from 'express';

// controller
import todoController from '../controllers/todoController';

// route object
const todoRouter = express.Router();

// default routes for todos
todoRouter.route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

// route for a single todo item
todoRouter.route('/:id')
  .get(todoController.getTodo)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

export default todoRouter;
