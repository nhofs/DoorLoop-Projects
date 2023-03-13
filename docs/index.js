const http = require('http');      // import http module
const server = http.createServer();     // create server

server.listen(8080, () => {
    console.log('Server running on port 8080') // listening on the port
})