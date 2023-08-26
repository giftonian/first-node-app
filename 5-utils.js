const sayHi = (name) => {
    // Arrow functions are more concise, especially for simple functions. 
    // They omit the need for the function keyword and curly braces when the function body is a single expression.
    // It doesn't have its own binding for this. [Lexical `this` binding => surrounding]
    console.log(`Hello there ${name}`)
}

module.exports = sayHi