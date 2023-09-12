const { writeFileSync } = require('fs')

for (let i=0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Helo Universe! ${i} \n`, {flag: 'a'})
}