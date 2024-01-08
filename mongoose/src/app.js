const mongoose = require('mongoose')

//creating and connecting new db
mongoose.connect("mongodb://localhost:27017/mydb")
.then(()=>{
    console.log("connection sucessful");
})
.catch((err)=>{
    console.log(err);
})