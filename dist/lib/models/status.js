'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StatusSchema = new Schema({
  name: String,
  description: String,
  type: String
});

mongoose.model('Status', StatusSchema);