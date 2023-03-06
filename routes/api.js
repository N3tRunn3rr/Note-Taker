const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');



const noteData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
console.log(noteData);
const noteArr = JSON.parse(noteData);
console.log(noteArr);


/// GET notes route
api.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
  console.info(`${req.method} request received to get notes from api.js`);
});

// POST notes route
api.post('/notes', (req, res) => {
  const newNote = {title: req.body.title, text: req.body.text, id: uuidv4()};
  noteArr.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArr));
  res.json(noteArr);
  return console.log('New note added: ' + newNote.id);
});


module.exports = api;