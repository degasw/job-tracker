'use strict';

var mongoose = require('mongoose'),
    Job = mongoose.model('Job'),
    Status = mongoose.model('Status');

exports.jobStatus = function(req,res) {
    var jobNumber = req.body.number;
    Job.findOne({number: jobNumber} , function(err,job){
    if(!err){
      return res.json(job);
    } else {
      return res.send(err);
    }
  });
};

exports.statusDescriptions = function(req,res) {
    Status.find(function(err,statuses){
      if (!err) {
        return res.json(statuses)
      } else {
        return res.send(err);
      }
    });
};