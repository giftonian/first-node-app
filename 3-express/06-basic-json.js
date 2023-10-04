const express = require('express')
const app = express()
const { products } = require('./data') // data.js is exporting products and people data
app.get('/', (req, res) => {
    //res.json([{name: 'Ahmad'}, {name: 'Waqas'}])
    res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
