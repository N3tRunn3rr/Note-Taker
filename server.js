const express = require('express');
const path = require('path');
const PORT = 3001;

const dbData = require('./db/db.json');

//initialize app 
const app = express();
app.use(express.json());

app.use(express.static('public'));

//route for homepage 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
//route in case of error

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(dbData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);