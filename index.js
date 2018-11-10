// module imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// instantiate app
const app = express();
const port = 5555;

// routes
app.get('/', (req, res) => {
  res.send
})

// start server
app.listen(port, () => console.log(`Server running on port ${port}`));
