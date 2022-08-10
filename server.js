const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// you don't ctrl the port on a deployed app
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   // true- more accurate but slower, false-faster but less accurate

app.use('/api', api);
app.use(express.static('public'));    // 'public' folder

// GET route for notes page                               WORKS
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET route for landing page                             WORKS
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// using '*' for GET landing page. probably won't use this 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/404.html'))
// );

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);