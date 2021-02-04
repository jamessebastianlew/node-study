// using the events module to create an event emitter
const events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('celebrate', (data) => {
    console.log('Celebrate ' + data);
});

myEmitter.emit('celebrate', 'birthday');
