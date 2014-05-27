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
    ordinal: 1,
    name: 'Submitted for production',
    description: 'Submitted for production',
    type: 'Pre'
  },{
    ordinal: 2,
    name: 'Waiting for Artwork',
    description: 'Waiting for Artwork',
    type: 'Pre'
  },{
    ordinal: 3,
    name: 'Waiting for Sign-off',
    description: 'Waiting for Sign-off',
    type: 'Pre'
  },{
    ordinal: 4,
    name: 'Waiting for Approval',
    description: 'Waiting for Approval',
    type: 'Pre'
  },{
    ordinal: 5,
    name: 'In printing',
    description: 'In printing',
    type: 'Production'
  },{
    ordinal: 6,
    name: 'Finishing',
    description: 'Finishing',
    type: 'Production'
  },{
    ordinal: 7,
    name: 'Setup',
    description: 'Setup',
    type: 'Production'
  },{
    ordinal: 8,
    name: 'Breakdown',
    description: 'Breakdown',
    type: 'Production'
  },{
    ordinal: 9,
    name: 'In Construction',
    description: 'In Construction',
    type: 'Production'
  },{
    ordinal: 10,
    name: 'In Transit to venue',
    description: 'In Transit to venue',
    type: 'Production'
  },{
    ordinal: 11,
    name: 'In Delivery Vehicle',
    description: 'In Delivery Vehicle',
    type: 'Post'
  },{
    ordinal: 12,
    name: 'Delivered to Site',
    description: 'Delivered to Site',
    type: 'Post'
  },{
    ordinal: 13,
    name: 'Ready for Collection',
    description: 'Ready for Collection',
    type: 'Post'
  },function(){
    console.log('finished populating status descriptions');
  });
});
