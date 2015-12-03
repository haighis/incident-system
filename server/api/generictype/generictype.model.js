'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var GenerictypeSchema = new Schema({
  name: String,
  description: String,
  tag: String,
  display_order: Number
});

module.exports = mongoose.model('Generictype', GenerictypeSchema);
