const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log(req.url);

    if(req.url == "/"){  //homepage
        res.end('Request received, output: Hello from the home. Changes made');
    }
    else if(req.url == "/contact"){
        res.end("on the contact page")
    }
    else if(req.url == "/about"){
        res.end("on the aboutUs page")
    }
    else{   //if invalid page is requested
        res.writeHead(404, {"Content-type" : "text/html"})  //specifies the status code in the network
        res.write("<h1>404 error: Page not found.</h1>")
        res.end()
    }
});

server.listen(8080, "127.0.0.1", ()=>{
    console.log("Listening of port 8080");
});