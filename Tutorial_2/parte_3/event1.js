let events = require('events');
let eventEmitter = new events.EventEmitter();

//Create an event handler:
let myEventHandler = function () {
  console.log('Pasó un evento particular!');
}

//Assign the event handler to an event:
eventEmitter.on('unEventoParticular', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('unEventoParticular');