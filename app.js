// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server.
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${3000}/`);
});
