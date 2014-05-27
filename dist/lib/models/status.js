'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StatusSchema = new Schema({
  ordinal: Number,
  name: String,
  description: String,
  type: String
});

mongoose.model('Status', StatusSchema);