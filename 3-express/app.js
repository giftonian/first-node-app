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

app.use(express.static('./public')) //serving everything(including index file) as static assets


app.get('/about', (req, res) => {
    
})

app.all('*', (req, res) => {
    res.status(404).send('<h2>Resource not found</h2>'); //method chaining
})

app.listen(5000, () => {
    console.log('server is listening at port 5000')
})