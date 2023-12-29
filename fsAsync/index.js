const fs = require("fs")
//async method always contains the callback method.
fs.writeFile("read.txt", "this is async fs tutorial", (err)=>{
    console.log("file is created");
    console.log(err);
});

fs.appendFile("read.txt", ", this text is added with the help of append method.", (err)=>{
    console.log("file appended!");
    console.log(err)
})

fs.readFile("read.txt", "UTF-8", (err, data)=>{
    console.log(data);   //data.toString() also works without mentioning file encoding i.e: UTF-8
})