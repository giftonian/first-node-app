const logger = (req, res, next) => { // You must pass "next" to your middleware to pass the control to next middleware
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
  }

  module.exports = logger