/**
 * Tenant model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Tenant = require('./tenant.model');
var TenantEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TenantEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Tenant.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TenantEvents.emit(event + ':' + doc._id, doc);
    TenantEvents.emit(event, doc);
  }
}

module.exports = TenantEvents;
