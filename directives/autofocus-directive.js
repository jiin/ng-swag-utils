angular.module('ngAutofocus', [])
  .directive('ngAutofocus', function() {
    return {
      link: function(scope, element) {
        element[0].focus();
      }
    };
  });