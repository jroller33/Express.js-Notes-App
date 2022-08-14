const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   // true-more accurate but slower, false-faster but less accurate
app.use('/api', api);
app.use(express.static('public'));    // 'public' folder


// GET route for landing page                             
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for notes page                               
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// wildcard route for 404 page. should ALWAYS be below ALL other routes.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/404.html'))
);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
