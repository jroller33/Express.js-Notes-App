const express = require('express');

// import modular routers forand /notes
// landing.js not needed

// const landingRouter = require('./landing');
const notesRouter = require('./notes');

const app = express();

// app.use('/landing', landingRouter);
app.use('/notes', notesRouter);

module.exports = app;
