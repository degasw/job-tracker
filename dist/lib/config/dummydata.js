'use strict';

var mongoose = require('mongoose'),
  Job = mongoose.model('Job'),
  Status = mongoose.model('Status');

/**
 * Populate database with sample application data
 */
Job.find({}).remove(function(){
  Job.create(
  {
    number: 1,
    name: 'Customer sample job one',
    type: 'Digital Printing',
    status: 'Submitted for production'
  },
  {
    number: 2,
    name: 'Customer sample job two',
    type: 'Digital Printing',
    status: 'Finishing'
  },
  {
    number: 3,
    name: 'Customer sample job three',
    type: 'Multimedia Production',
    status: 'Ready for Collection'
  },
  function(){
    console.log('finished populating sample jobs');
  });
});

Status.find({}).remove(function(){
  Status.create({
    name: 'Submitted for production',
    description: 'Submitted for production',
    type: 'Pre'
  },{
    name: 'Waiting for Artwork',
    description: 'Waiting for Artwork',
    type: 'Pre'
  },{
    name: 'Waiting for Sign-off',
    description: 'Waiting for Sign-off',
    type: 'Pre'
  },{
    name: 'Waiting for Approval',
    description: 'Waiting for Approval',
    type: 'Pre'
  },{
    name: 'In printing',
    description: 'In printing',
    type: 'Production'
  },{
    name: 'Finishing',
    description: 'Finishing',
    type: 'Production'
  },{
    name: 'Setup',
    description: 'Setup',
    type: 'Production'
  },{
    name: 'Breakdown',
    description: 'Breakdown',
    type: 'Production'
  },{
    name: 'In Construction',
    description: 'In Construction',
    type: 'Production'
  },{
    name: 'In Transit to venue',
    description: 'In Transit to venue',
    type: 'Production'
  },{
    name: 'In Delivery Vehicle',
    description: 'In Delivery Vehicle',
    type: 'Post'
  },{
    name: 'Delivered to Site',
    description: 'Delivered to Site',
    type: 'Post'
  },{
    name: 'Ready for Collection',
    description: 'Ready for Collection',
    type: 'Post'
  },function(){
    console.log('finished populating status descriptions');
  });
});
