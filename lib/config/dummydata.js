'use strict';

var mongoose = require('mongoose'),
  Job = mongoose.model('Job');

/**
 * Populate database with sample application data
 */
Job.find({}).remove(function(){
  Job.create({
    number: 1,
    name: 'Customer sample job one',
    type: 'Digital Printing',
    status: 'Request for quotation'
  },{
    number: 2,
    name: 'Customer sample job two',
    type: 'Digital Printing',
    status: 'Quotation provided'
  },{
    number: 3,
    name: 'Customer sample job three',
    type: 'Multimedia Production',
    status: 'Quotation accepted'
  },{
    number: 4,
    name: 'Customer sample job four',
    type: 'Rentals',
    status: 'Quotation accepted'
  },function(){
    console.log('finished populating sample jobs');
  });
});