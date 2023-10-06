const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize]) // Middleware/s (left to right order) for every route in the app
// app.use('/api', logger)  // logger Middleware for all /api routes

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  console.log(req.user); // Accessing the object set inside the Authorize Middleware
  res.send('Products')
})

// Pass an array of Middlewares as a second param to .get() to specific route/s
app.get('/api/items',/*[logger, authorize],*/ (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
