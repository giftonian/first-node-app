const express = require('express')
const app = express()

const { products } = require('./data') // data.js is exporting products and people data

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    // The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.
    /*
    // Input array
        let arr = [2, 5, 6, 3, 8, 9];

        // Using map to transform elements
        let newArr = arr.map(function (val, index) {
            return { key: index, value: val * val };
        })

        // Display output
        console.log(newArr)

    */
    const newProducts = products.map((product) => { // I don't want to send Desc of the products at listing/home page
      const { id, name, image } = product
      return { id, name, image }
    })
  
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    //console.log(req.params)
    const { productID } = req.params; // parameter will be string type by default
    const singleProduct = products.find((product) => product.id === Number(productID)) 
    
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }

    res.json(singleProduct)    
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello review world')
})


app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    
    const { search, limit } = req.query // set in url as query?search=blabla&limit=10 for example
    // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    /*
    e.g., Following is an example of Assigning the first and second items from numbers to variables and put the rest in an array:
    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;
    */
    let sortedProducts = [...products]
  
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    return res.status(200).json(sortedProducts)
})
  

app.listen(5000, () => {

    console.log('Listening at 5000....')
})