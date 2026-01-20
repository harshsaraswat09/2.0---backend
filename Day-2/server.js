const express = require("express")

const app = express() // server instance create karna 

app.get('/', (req,res)=>{
    res.send("HELLO")
})

app.get('/about', (req,res)=>{
    res.send("THIS IS ABOUT PAGE")
})

app.get('/home', (req,res)=>{
    res.send("Home")
})

app.listen(3000) // server start karna 

