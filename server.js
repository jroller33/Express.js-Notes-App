const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// might need these later
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);


app.use(express.static('public'));

// GET route for landing page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// wildcard route to direct users to 404 page. should ALWAYS be below ALL other routes.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);