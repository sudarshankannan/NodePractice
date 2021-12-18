//import required modules
var http = require("http"); //load http module & store HTTP instance
var express = require ('express')

//create server - pass callback function to createServer()
//server is listening on port 8081
http.createServer(function(request,response){
    //send the HTTP header
    //HTTP status: 200 : 0K
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //send response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');