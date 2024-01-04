const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello from the express!")
})

app.get("/about", (req, res)=>{
    res.send("Hello from the AboutUs page!")
})

app.listen(8000, ()=>{
    console.log("Listening on port 8000");
})