const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on("request", (req, res)=>{
    //this is the old way, first the entire data will be downloaded then displayed
    // fs.readFile("./input.txt", (err, data)=>{
    //     if(err) return console.error(err)
    //     res.end(data.toString())
    // })

    // second Way, the loaded data is displayed first and the further data is loaded in background, eg. live streaming
    // const rstream = fs.createReadStream("input.txt")

    // rstream.on('data', (chunkData)=>{   //the data is read chunk by chunk and then displayed immidiately after chunk has been read
    //     res.write(chunkData)
    // })

    // rstream.on('end', ()=>{     //the end method is used when is there is no more data left to read.
    //     res.end();
    // })

    // rstream.on('error', (err)=>{
    //     console.log(err);
    //     res.end("file not found")
    // })

    // third way
    const rstream = fs.createReadStream("input.txt")
    rstream.pipe(res)   //it takes readable stream and connect it to writable stream

})

server.listen(8000, "127.0.0.1")