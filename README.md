# Node JS

## Package Installation
- Install package for particular project only `npm i [packagename]`
- Install package globally `npm install -g [packagename]`  
- Install all dependencies of the project `npm install `
- To uninstall `npm uninstall [packagename]`

## NPM Project
- step by step, press enter to skip `npm init`
- everything default `npm init -y`
- Inside scripts section of *package.json*, you can create commands like `"start": "node app.js"` and then run this command using `npm start`

## Some Useful Packages/Utilities
### Nodemon
- Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.
- Install it as dev dependency, as you shouldn't use such tool at live server `npm i nodemon -D`
- **Suggestion:** You should install such a package globally so that you don't need to write command inside scripts section of your package.json to run the particular project with nodemon.

### util Package
- `const util = require('util');`
- You can make a buil-in function return Promise using `const readFilePromise = util.promisify(readFile);`
- Alternatively, convert all functions of a package to promises? Do this instead: `const {readFile, writeFile} = require('fs').promises `

## Dev Notes
- Javascript is Synchronous and Single Threaded. We usually offload(callback like setTimeout, etc.) some tasks to make it asynchronous.
## Misc
### Event Loop
- The event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that JavaScript is single-threaded - by offloading operations to the system kernel whenever possible.
- Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the **poll** queue to eventually be executed.
### Async Pattern
- See, Async await pattern to use Promises for clarity to avoid async callbacks hell
### Events Emitter
- Events : Listen then Emit - Order matters
- You can listen same event as many times as you want i.e., multiple entries for callback function to listen same event
### Streams
- Ever think of a Stream of continuous data from a big file?
- Read and Write sequentially
- Node.js has 4 types of Streams:
- 1) Writeable 2) Readable 3) Duplex 4) Transform
- Scenario 1: What if a file size gets too big when you are reading it synchronously and storing in a variable?

### HTTP
- HTTP message need a blank line right after Headers info in the message to indicate that all META information has been sent/written before this blank line. Remeber? `Headers Already Sent` error in PHP web application?


### Express
- Express is built on top of Node.js, specifically on `http` module
## Resources
- https://nodejs.dev/en/
- http://course-api.com/
