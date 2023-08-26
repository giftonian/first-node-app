// GLOBALS - NO WINDOW !!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(__dirname)

let iter = 1;
setInterval(() => { // arrow function passed as callback
    console.log(iter + ' Hello world')
    iter++;
}, 1000)