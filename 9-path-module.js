const path = require('path')

console.log(path.sep) // platform specific separator

const filePath = path.join('/content', 'subfolder', 'test.txt') // to get the normalize path
console.log(filePath);

const base = path.basename(filePath) // file basename
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);