const authorize = (req, res, next) => {
    const { user } = req.query
    
    if (user === 'waqas') {
        req.user = {name: 'Waqas', id: 10}
        next()
    } else {
        res.status(401).send('Unauthorized Access!')
    }
    console.log('authorize..')
    next()
}

  module.exports = authorize