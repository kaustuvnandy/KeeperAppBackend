const mongoose = require('mongoose');

const note = new mongoose.Schema({
    title : {type: String, required: true},
    content : {type: String, required: false}                       //changed from true -> false
})

module.exports = mongoose.model('Note', note)
