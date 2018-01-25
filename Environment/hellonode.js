var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello Wolrd!\n');
}).listen(8000);

console.log('Srever running at http://127.0.0.1:8000');