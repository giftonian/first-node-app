// local e.g., I want to keep this variable to this file only, not whole app
const secret = 'SUPER SECRET'

// shared e.g., I will export following vars to share with rest of the app
const john = 'John'
const peter = 'Peter'

//console.log(module)

module.exports = {john, peter} // bcz key and value names are same