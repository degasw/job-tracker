'use strict';

var mongoose = require('mongoose'),
    Job = mongoose.model('Job');

exports.jobStatus = function(req,res){
    var jobNumber = req.body.number;
    Job.findOne({number: jobNumber} , function(err,job){
    if(!err){
      return res.json(job);
    } else {
      return res.send(err);
    }
  });
};
