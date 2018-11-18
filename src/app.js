// dependencies
import express from 'express';
import logger from 'morgan';

// api
import mainRouter from './api/v1';

// instantiate app
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.disable('x-powered-by');

// routes
app.use('/api/v1', mainRouter);
app.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: 'Welcome to the todo API' });
});

export default app;
