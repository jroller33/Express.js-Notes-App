const express = require('express');

// import modular routers for /landing and /notes
const landingRouter = require('./landing');
const notesRouter = require('./notes');

const app = express();

app.use('/landing', landingRouter);
app.use('/notes', notesRouter);

module.exports = app;
