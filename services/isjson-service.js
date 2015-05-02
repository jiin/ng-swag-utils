angular.module('isJson', [])
  .factory('isJson', [function () {
    return {
      test: function (c) {
        if (typeof c == 'object')
          c = JSON.stringify(c);
 
        try {
          var p = JSON.parse(c);
 
          if (p && typeof p == 'object')
            return true;
        } catch (e) {
          // no json
        }
 
        return false;
      }
    }
  }]);