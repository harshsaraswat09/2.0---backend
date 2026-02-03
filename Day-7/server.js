/*
    - server start karna
    - database connect karna
*/
require("dotenv").config()

const connectToDb = require("./src/config/database.js")

const app = require("./src/app.js")


connectToDb()

app.listen(3000, ()=>{
    console.log("server is running on 3000")
})