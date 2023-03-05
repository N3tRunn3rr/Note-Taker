const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const dbData = require('./db/db.json');

//initialize app 
const app = express();
app.use(express.json());

app.use(express.static('public'));

//GET route for homepage 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
//route in case of error

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(dbData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

module.exports = app;

//TODO: figure out which of these are needed
// const fs = require('fs');
// const util = require('util');