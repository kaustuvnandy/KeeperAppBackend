const express = require('express')
const NoteCtrl = require('../controller/note-ctrl')

const route = express.Router()

route.post('/note', NoteCtrl.createNote)
route.delete('/note/:id', NoteCtrl.deleteNote)
route.get('/note', NoteCtrl.retrieveNote)
route.put('/note/:id', NoteCtrl.updateNote)

module.exports = route