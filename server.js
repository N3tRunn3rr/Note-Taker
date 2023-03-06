const express = require('express');
const path = require('path');
var api = require('./routes/api');

const PORT = process.env.PORT || 3001;

//initialize app 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);

//GET route for notes page 
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
  console.info(`${req.method} request received to get notes.html from server.js`);
});

//GET route for homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
  console.info(`${req.method} request received to get index.html from server.js`);
});


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
