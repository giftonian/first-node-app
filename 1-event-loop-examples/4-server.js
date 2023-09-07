const http = require('http')

// Every time a Request comes in, we have a following callback to be executed
const server = http.createServer((req, res) => {
    console.log('request event..')
    res.end('Hello from Node.js Server')
})

// res.write("Hello from Node.js Server... ", 'utf8', () => {
//     console.log("Writing string Data...");
// });

server.listen(5000, () => {
    console.log('Server listening on port : 5000 ...')
})