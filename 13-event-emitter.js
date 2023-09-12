// Events : Listen then Emit
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> { // we can have as many functions/call backs for the same events
    console.log(`data received - ${name} with id = ${id}`)
})

customEmitter.on('response', ()=> { 
    console.log(`another callback for response event  - data received`)
})

customEmitter.emit('response', 'waqas', 010)
