const express = require('express');
const app = express()
const path = require('path')
// Remember few important functions
// app.get
// app.post
// app.put
// app.delete

// app.all - handles all types of requests(get/post/put/delete)
// app.use - sort of Middleware in express app
// app.listen

// Here, a built-in middleware is passed to app.use() method
app.use(express.static('./public')) //loading static files and middlewares in Express

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))   
})

app.get('/about', (req, res) => {
    
})

app.all('*', (req, res) => {
    res.status(404).send('<h2>Resource not found</h2>'); //method chaining
})

app.listen(5000, () => {
    console.log('server is listening at port 5000')
})