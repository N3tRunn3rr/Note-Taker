const express = require('express');

//Import modular routers for /api
const apiRouter = require('./api');

const app = express();

app.use('/api', apiRouter);

module.exports = app;
