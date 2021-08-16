const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require ('./db');
const noteRouter = require('./router/note-route');


const app = express()
const port = 5000

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use(cors())
//app.use(express.static(path.join(__dirname, )))
app.use('/api', noteRouter)                         //handling the router

db.on('error', err => console.log(err))

app.get('/', (req,res) => {
    res.send ('Hello World')                        //response from server
})

app.listen(port, () => { 
    console.log('App listening to' + port)
})

