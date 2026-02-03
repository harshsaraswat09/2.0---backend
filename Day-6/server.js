/*
    - server ko start karna
    - database se connect karna
*/

const app = require('./src/app.js')

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://Harshji:4o2ODiMYoEJ1aCdP@cluster0.enpexcy.mongodb.net/Day-6")
    .then(()=>{
        console.log("connected to Database")
    })
}
connectToDb()

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})