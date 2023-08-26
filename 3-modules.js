// Modules - Encapsulated Code (only share minimum)
// NodeJs uses CommonJS library under the hood
// In NodeJs, every file is module by default

const names = require('./4-names-modules')
const sayHi = require('./5-utils')
const data  = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log('********************')

console.log(data)

console.log('********************')

// Arrow Functions ///////////////////////////////////
// Lexical `this` Binding

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      // Here, the arrow function inherits the `this` from the surrounding `fullName` function.
      return () => {
        return `${this.firstName} ${this.lastName}`;
      };
    }
  };
  
  const getFullName = person.fullName(); // This returns the arrow function.
  console.log(getFullName()); // Output: "John Doe"


  // Traditional Functions /////////////////////////////
  // Explicit `this` Binding
  function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };
  
  const greetPerson1 = greet.bind(person1);
  const greetPerson2 = greet.bind(person2);
  
  greetPerson1(); // Output: "Hello, Alice"
  greetPerson2(); // Output: "Hello, Bob"
  
  