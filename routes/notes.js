const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid'); // not sure if I'll need this

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// GET route for specific note

// DELETE route for specific note

// POST route for new note


module.exports = notes;