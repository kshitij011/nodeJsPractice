const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('Request received, output: Hello from the other side. Changes made');
});

server.listen(8080, "127.0.0.1", ()=>{
    console.log("Listening of port 8080");
});