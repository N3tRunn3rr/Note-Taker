const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
// const { readFromFile, readAndAppend } = require('../helpers/fsUtil');


//GET /api/notes should read the db.json file and return all saved notes as JSON.
api.get('/notes', (req, res) => {
  console.info(`${req.method} request received to get notes`);
  fs.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});




// POST Route to save a new note and add it to the db.json file
api.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { note } = req.body;
  
    if (note) {
      const newNote = {
        note,
        note_id: uuidv4(),
      };
  
      fs.readAndAppend(newNote, './db/db.json');
      res.JSON('Note added successfully');
    } else {
      res.error('Error in adding note');
    }
  });

module.exports = api;