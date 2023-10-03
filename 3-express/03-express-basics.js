const express = require('express');
const app = express()
// Remember few important functions
// app.get
// app.post
// app.put
// app.delete

// app.all - handles all types of requests(get/post/put/delete)
// app.use - sort of Middleware in express app
// app.listen

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h2>Resource not found</h2>'); //method chaining
})

app.listen(5000, () => {
    console.log('server is listening at port 5000')
})