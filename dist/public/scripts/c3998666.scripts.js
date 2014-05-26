"use strict";angular.module("jobTrackerApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).when("/results",{templateUrl:"partials/results"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("jobTrackerApp").controller("MainCtrl",["$rootScope","$scope","$http","$location","$log",function(a,b,c,d,e){b.search=function(){var f={number:b.jobNumber};c.post("/api/jobStatus",f).success(function(b){a.job=b,d.path("/results")}).error(function(a){e.log(a)})}}]).controller("ResultsCtrl",["$rootScope","$scope","$http",function(a,b,c){b.init=function(){c.get("/api/statusDescriptions").success(function(a){b.statuses=a}).error(function(){})},b.isSelectedStatus=function(b){return b==a.job.status?!0:!1},b.pre_production="Pre",b.production="Production",b.post_production="Post",b.init()}]),angular.module("jobTrackerApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"}],a.isActive=function(a){return a===b.path()}}]),angular.module("jobTrackerApp").directive("resultTimeline",function(){return{restrict:"E",templateUrl:"/partials/resultTimeline.jade"}});