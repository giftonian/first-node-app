const http = require('http');
const {readFileSync} = require('fs');

// get all files
//const homePage = readFileSync('./index.html') // Remember, this will be called only once at the time of Server Run/Create, not for every request
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer( (req, res)=> {

    console.log('user sent the request');
    
    //res.write('<h1>welcome user</h1>');

    const url = req.url;
    
    if (url === '/') { // home page request
        res.writeHead(200, {'content-type': 'text/html'})
        //res.write('welcome to our Node.JS Server home page')        
        res.write(homePage)        
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Us page</h1>')
    } 
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
    } 
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
    } 
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
    } 
    
    else {
    //console.log(req)    
    res.writeHead(404, {'content-type': 'text/html'})
    res.write(`
    <h1>Oops!</h1>
    <h2>The resource you are looking for doen't exist</h2>
    `)
    }

    res.end()
})

server.listen(5000)