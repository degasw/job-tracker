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
  });
