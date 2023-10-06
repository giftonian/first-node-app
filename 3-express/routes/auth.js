const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body // pick the name property from req.body object
    if (name) {
      return res.status(200).send(`Welcome ${name}`) // An example of template string
    }
  
    res.status(401).send('Please Provide Credentials')
})

module.exports = router