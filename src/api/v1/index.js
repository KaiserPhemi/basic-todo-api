// dependencies
import express from 'express';

// router
const mainRouter = express.Router();

// routes
import todoRoutes from './todos/todoRoutes';

// mount all routes for resources
mainRouter.use('/todos', todoRoutes);

export default mainRouter;
