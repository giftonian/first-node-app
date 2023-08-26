const {readFileSync, writeFileSync} = require('fs') 
// or fs = require('fs') and then fs.reqdFileSync

const first  = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first} , ${second}`
);  // , {flag, 'a'}  for append the file instead of overwrite

console.log('done with this task')
console.log('starting the next one')