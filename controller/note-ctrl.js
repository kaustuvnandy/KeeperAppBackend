const Note = require('../model/note')

createNote = async(req, res) => {                                           //for creating a note
    const body = req.body

    if (!body){
        return res.status(400).json({
            success : false,
            error : 'Enter a note with required fields'
        })
    }

    const note = new Note(body)

    if(!note){
        return res.status(400).json({
            success : false,
            error : 'Failed'
        })
    }

    note
        .save()
        .then(() => { 
            res.status(201).json({
                success : true,
                data : note,
                message : 'Note Added'
            })
        })
        .catch(error => { 
            res.status(400).json({ 
                success : false,
                error : error
            })
        })
};

deleteNote = async(req, res) => {                                           //for deleting a note
    await Note
        .findByIdAndDelete(req.params.id, (err, note) => {
        if(err)
            return res.status(400).json({ 
            success : false,
            error : err
        })

        else if(!note)
            return res.status(404).json({
                success : false,
                message : 'Note does not exist'
            })
        
        return res.status(200).json({
            success : true,
            data : note,
            message : 'Note Deleted'
        })  
    })
    .catch(err => console.log(err))
};

retrieveNote = async(req, res) => {
    await Note.find({}, (err, notes) => {

        if(err)
            return res.status(400).json({
                success : false,
                error : error
        })

        else if(!notes.length)
            return res.status(404).json({
                success : false,
                message : 'No notes note exist'
            })

        return res.status(201).json({
            success : true,
            data : notes,
            message : 'Note Retrieved'
        })
    })
};

updateNote = async(req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success : false,
            error : 'Enter all fields'
        })
    }
    Note
    .findByIdAndUpdate(req.params.id, body, (err, note) => {
        if(err)
            return res.status(400).json({
                success : false,
                error : err
            })
        else if(!note)
            return res.status(404).json({
                success : false,
                message : 'Note does not exist'
            })
        return res.status(200).json({
            success : true,
            data : note,
            message : 'Note successfully updated'
        })
    })
}


module.exports = {
    createNote,
    deleteNote,
    retrieveNote,
    updateNote
}