angular.module('jobTrackerApp')
    .directive('resultTimeline',function(){
        return{
            restrict: 'E',
            templateUrl: '/partials/resultTimeline.jade'
        }
    });
