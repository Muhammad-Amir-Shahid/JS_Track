const EventEmitter = require('events');

// Create a custom event emitter
const customEmitter = new EventEmitter();

// Attach a listener to a custom event
customEmitter.on('greet', (name) => {
  console.log(Hello, ${name}! Welcome to the custom event.);
});

// Trigger the event
customEmitter.emit('greet', 'Amir');