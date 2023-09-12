const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')
// by default: the chunk is 64KB
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'} )

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})