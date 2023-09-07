const http = require('http')

// Every time a Request comes in, we have a following callback to be executed
const server = http.createServer((req, res) => {
    console.log('request event..')
   
    if (req.url === '/') { // home page request
        //res.write('welcome to our Node.JS Server home page')        
        res.end('welcome to our Node.JS Server home page')        
    } else if (req.url === '/about') {
        // blocking code
        for (let i=0; i < 1000; i++) { // This synchronous code will block every other user
            for (let j=0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Us page')
    } else {
    //console.log(req)    
    res.end(`
    <h1>Oops!</h1>
    <h2>The resource you are looking for doen't exist</h2>
    `)
    }
    
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000 ...')
})