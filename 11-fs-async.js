const {readFile, writeFile} = require('fs') // this time, Async

console.log('start....')
// if we don't provide utf8, it will return buffer instead of content
readFile('./content/first.txt', 'utf8', (err, result1) => {
  if (err) {
    console.log(err)
    return;
  } else {
     console.log(result1)
    readFile('./content/second.txt', 'utf8', (err, result2) => {
      if (err) {
        console.log(err)
        return;
      }
      else {    
        console.log(result2)
        writeFile('./content/result-async.txt', 
        `Here is the result of Async operation: ${result1} , ${result2}`, 
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log('Async files read/write operation completed successfully');
        }
        ); 
      }
    })
  }

})

console.log('starting next one')