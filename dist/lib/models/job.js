'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
  number: Number,
  name: String,
  type: String,
  status: String
});

mongoose.model('Job', JobSchema);