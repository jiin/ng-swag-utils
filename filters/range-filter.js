// Usage: <img ng-repeat="n in 5 | range"> or <img ng-repeat="n in myVar | range">

angular.module('rangeFilter', [])
  .filter('range', function() {
    return function(total) {
      var to = parseInt(total);
      var iterations = [];

      for(var i = 0; i < to; i++)
        iterations.push(i);
        
      return iterations;
    }
  });