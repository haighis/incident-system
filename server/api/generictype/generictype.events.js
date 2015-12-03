/**
 * Generictype model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Generictype = require('./generictype.model');
var GenerictypeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GenerictypeEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Generictype.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GenerictypeEvents.emit(event + ':' + doc._id, doc);
    GenerictypeEvents.emit(event, doc);
  }
}

module.exports = GenerictypeEvents;
