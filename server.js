const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// you don't ctrl the port on a deployed app
const PORT = process.env.PORT || 3001;

const app = express();

// might need these later
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use(express.static('public'));

// GET route for landing page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// wildcard route to direct users to 404 pg
// SHOULD ALWAYS BE BELOW ALL OTHER ROUTES!!!
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);