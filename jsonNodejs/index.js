const { log } = require("console");
const fs = require("fs")

const bioData = {
    name : "Computer",
    age : 26,
    channel : "youtube channel"
}

console.log(bioData.channel);

const jsonData = JSON.stringify(bioData)    //converts object to json
console.log(jsonData);

const objData = JSON.parse(jsonData)    //converts json to object
console.log(objData);

fs.writeFile("json1.json", jsonData, (err)=>{   //saving the data in new file
    console.log("file created ", err);
})

fs.readFile("json1.json", "utf-8", (err, data)=>{
    const orgData = JSON.parse(data)
    console.log(orgData);
})
