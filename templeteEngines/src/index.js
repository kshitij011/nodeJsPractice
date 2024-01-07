const { log } = require('console');
const express = require('express')
const app = express()
const path = require('path')

const port = 8000;

// const staticPath = path.join(__dirname, "../views");
const templatePath = path.join(__dirname, "../templates"); //if you want to rename views to some other filename define the path and set views to new folder name.


//Setting the view engine. 'views' folder is where templete files are located.
app.set("view engine", "hbs")
app.set("views", templatePath)  //setting default views folder name to custome name

// app.use(express.static(staticPath));

// templete engine route
app.get("/", (req, res)=>{
    res.render("index",{
        computer: "i3"
    });
})

app.get("/about", (req, res)=>{
    res.render("about",{
        computer: "myName"
    });
})

app.get("/", (req, res)=>{
    res.send("Hello from the express server");
})

app.listen(port, ()=>{
    console.log(`Listining on port ${port}`);
})