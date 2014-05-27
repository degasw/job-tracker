'use strict';

angular.module('jobTrackerApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, $location, $log) {
      $scope.search = function(){
        var numberQuery = { number : $scope.jobNumber };
        $http.post('/api/jobStatus', numberQuery ).success(function(job) {
          $rootScope.job = job;
          $location.path('/results');
        }).error(function(err){$log.log(err)})
      };
  })
  .controller('ResultsCtrl',function($rootScope,$scope,$http){
    $scope.init = function(){
      $http.get('/api/statusDescriptions').success(function(statusData){
        $scope.statuses = statusData;
        getStatusOrdinal();
      }).error(function(err){})
    };

    $scope.isSelectedStatus = function(status) {
      return (status == $rootScope.job.status) ? true : false ;
    };

    $scope.statusSelected = function(ordinal) {
      return (ordinal < $scope.ordinal) ? true : false ;
    };

    $scope.ordinalSort = function(){
        $scope.sortedList = [];
        for(var status in $scope.statuses) {

        }
    };

    function getStatusOrdinal() {
      for( var x = 0 ; x <= $scope.statuses.length - 1; x++) {
        if($rootScope.job.status == $scope.statuses[x].name) {
          $scope.ordinal = $scope.statuses[x].ordinal.toString();
        }
      }
    };

    $scope.pre_production = "Pre";
    $scope.production = "Prod-status";
    $scope.post_production = "Post";
    $scope.init();
  });


