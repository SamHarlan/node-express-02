const http = require('http');
const hostname = 'leia.cs.spu.edu';
const port = 3010;

var checkPrime = require("./checkprime.js"); // Once for all times
var interface = require("./interface.html");

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(interface);


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
