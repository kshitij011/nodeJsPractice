const fs = require("fs");   //fs is file system used to read, crete, update the file (usually txt file)

fs.writeFileSync('read.txt', "Welcome to the tutorial.")    //first is the name of the file followed by the data that goes in the file

fs.writeFileSync('read.txt', "Welcome to my tutorial. This the first file")    // if file is already present it updates the file data

fs.appendFileSync('read.txt', " of nodeJs tutorial")    //appends the data to the file

const buff_data = fs.readFileSync("read.txt")   //returns the data in binary format(buffer data)
console.log('Buffer Data: ', buff_data)

const orgData = buff_data.toString()
console.log(`Original data in string format: ${orgData}`)   //console.log('Buffer Data: '+ buff_data) This also works the same

//renaming the file
fs.renameSync('read.txt', "readWrite.txt")

//unlinkSync(filePath)) to delete a file
//rmdirSync(path) to delete a folder
//fs.mkdirSync(name) to create a folder

