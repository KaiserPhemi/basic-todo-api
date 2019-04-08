// express app
import app from './src/app';
import mongoose from 'mongoose';


// declare port
const port = process.env.PORT || 5555;
app.set('port', port);

// connect to database
mongoose.connect('mongodb://localhost/todo-prod', { useNewUrlParser: true });

// start server
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-console
  console.log(`Server started. Listening on port ${port}...`);
});
