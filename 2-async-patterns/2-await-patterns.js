const {readFile, writeFile} = require('fs') // this time, Async
const util = require('util');

const readFilePromise = util.promisify(readFile); // making existing functions to return/serve a promise
const writeFilePromise = util.promisify(writeFile);

console.log('start....')
// if we don't provide utf8, it will return buffer instead of content

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
              reject(err)              
            } else {
               resolve(data)   
            }
          })
    })
}



// getText('./content/first.txt')
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
//     console.log(err)
// })

const start = async () => {
    try {
    const first = await readFilePromise('./content/first.txt', 'utf8') // awaiting for a promise for file 1
    const second = await getText('./content/second.txt') // awaiting for a promise for file 2

    await writeFilePromise('./content/result-async-promise.txt', `Here is the result of Async operation: ${first} , ${second}`)
    console.log(first)
    console.log(second)
    } catch (error) {
        console.log(error)
    }
}

start()