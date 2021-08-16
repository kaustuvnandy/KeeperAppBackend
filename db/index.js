const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://kaustuv:1234@cluster0.2y08c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch(err => { 
        console.error('Connection error :' + err.message)
    })

const db = mongoose.connection
module.exports = db