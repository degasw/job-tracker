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
  }).controller('ResultsCtrl',function($scope,$http){
    $scope.init = function(){
      $http.get('/api/statusDescriptions').success(function(statusData){
        $scope.statuses = statusData;
      }).error(function(err){})
    };
    $scope.pre_production = "Pre";
    $scope.production = "Production";
    $scope.post_production = "Post";
    $scope.init();
  });
