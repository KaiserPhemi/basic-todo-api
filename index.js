// module imports
import http from 'http';
import app from './src/config/app';

// declare port
const port = process.env.PORT || 5555;
app.set('port', port);

// create server
const server = http.createServer(app);

// start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
