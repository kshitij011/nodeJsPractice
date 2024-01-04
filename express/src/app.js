const express = require('express');
const path = require('path')
const app = express();

const staticPath = path.join(__dirname, '../public');    //use absolute path not relative("../public")

app.use(express.static(staticPath))

app.get("/", (req, res)=>{
    res.send("Hello from the express!")
})

app.get("/api", (req, res)=>{
    res.send({
        id: 1,
        name: "Computer",
        processor: "i3",
        model: "dell"
    })
})

app.get("/about", (req, res)=>{
    res.status(200).send("Hello from the AboutUs page!")    //status code is written to tell the user that this page exists with status code 200
})

app.listen(8000, ()=>{
    console.log("Listening on port 8000");
})