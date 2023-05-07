const { Router } = require("express");
const fs = require("fs");
const uniqid = require("uniqid");
const router = require('express').Router();


router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json"));
    console.log(JSON.stringify(notes));
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    }

    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);

});

router.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json"));
    let deleteNote = notes.filter(note => note.id != req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    res.json(deleteNote);
});

module.exports = router;