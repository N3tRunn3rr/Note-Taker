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
  // console.info(`${req.method} request received to get notes from api.js`);
});

// POST notes route
api.post('/notes', (req, res) => {
  const newNote = {title: req.body.title, text: req.body.text, id: uuidv4()};
  noteArr.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArr));
  res.json(noteArr);
  return console.log('New note added: ' + newNote.title);
});

//TODO: come back later and figure out how to delete notes for the bonus points
// api.delete('/notes/:id')
//need to read the db.json file and then delete the note with the id that matches the id in the url
//then rewrite the notes to the db file 


module.exports = api;