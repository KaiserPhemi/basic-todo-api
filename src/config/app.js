// module imports
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

// routers
import todoRouter from '../routes/v0/todoRouter';
// import userRouter from '../routes/v0/userRouter';

// instantiate app
const app = express();

// logging
app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// bypass CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// routes
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the todo API' });
});
app.use('/api/todos', todoRouter);
// app.use('/api/users', userRouter);

export default app;
