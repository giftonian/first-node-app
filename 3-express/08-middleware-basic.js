const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => { // You must pass "next" to your middleware to pass the control to next middleware
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => { // Here logger is being called as Middleware function and req/res are
  // also passed to it automatically by Express
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
