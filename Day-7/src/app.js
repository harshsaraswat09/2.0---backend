/*
    - server create karna
    - server config karna
*/

const express = require("express")
const app = express()

const noteModel = require("./models/notes.models")


app.use(express.json())
/*
    - POST /notes
    - req.body => {title, description}
*/

app.post("/notes", async (req, res)=>{
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created Successfully",
        note
    })
})

/*
    - GET /notes
    - fetch all the notes data
*/
app.get("/notes", async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched Successfully",
        notes
    })
})





module.exports = app