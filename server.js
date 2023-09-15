//import buil-in http module
var http = require("http");
// create a server
http
  .createServer((req, res) => {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/html
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send the response body as 'Hello Node!!!!'
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000); //the program will  run on port "3000"

//  print the message in the Console
console.log("Server running at  http://localhost:3000");
