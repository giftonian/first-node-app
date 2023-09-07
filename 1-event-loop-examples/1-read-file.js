const _ = require('lodash')
const { readFile } = require('fs')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(items)
console.log('*********')
console.log(newItems)
console.log("Hey waqas, good going for learning NodeJs")

// console.log("Task 1")
// setTimeout(() => {
//     console.log("Time consuming task finishes")

// }, 2000) // Tasks after this callbacks will be executed first, regardless the time parameter
// console.log("Task 2")

// // Event loop example
// console.log('stared a first task before file reading')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task of file reading')
})
console.log('starting next new task')