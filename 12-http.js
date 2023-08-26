const http = require('http');

const server = http.createServer( (req, res)=> {

    if (req.url === '/') { // home page request
        //res.write('welcome to our Node.JS Server home page')        
        res.end('welcome to our Node.JS Server home page')        
    } else if (req.url === '/about') {
        res.end('About Us page')
    } else {
    //console.log(req)    
    res.end(`
    <h1>Oops!</h1>
    <h2>The resource you are looking for doen't exist</h2>
    `)
    }
})

server.listen(5000)