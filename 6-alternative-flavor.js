const items = ['item1', 'item2']; // Here the const keyword ensures that the variable items always refers to the same array object, 
// but it does not prevent you from changing the content of that array.

items[2] = 'item3';
// console.log(items[2])

// items = 'test' // Error

module.exports.newItems = ['newItem1', 'newItem2'] // new syntax to export
const person = { // object
    name: 'bob'
}

module.exports.singlePerson = person // bcz module.exports is an object