// const http = require('http');      // import http module
// const server = http.createServer();     // create server

// server.on('request', (req, res) => {

//     if(req.url === '/' && req.method == 'GET') {
//         return res.end(fs.readFileSync(__dirname + '/index.html'))
//     }
    
//     if(req.url=== '/upload' && req.method == 'POST') {
//         const query = new URLSearchParams(req.url);
//             const fileName = query.get(‘/upload?fileName’);
    
//         req.on('data', chunk => {
//             fs.appendFileSync(fileName, chunk); // append to a file on the disk
//         })
    
    
//         return res.end('Yay! File is uploaded.')
//     }
//     })

// server.listen(8080, () => {
//     console.log('Server running on port 8080') // listening on the port
// })