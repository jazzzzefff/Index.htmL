const express = require('express');
const app = express();

// Serve files from 'public' folder
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
