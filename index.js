// express app
import app from './src/app';

// declare port
const port = process.env.PORT || 5555;
app.set('port', port);


// start server
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-console
  console.log(`Server started. Listening on port ${port}...`);
});
