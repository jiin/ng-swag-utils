angular.module('middlaw', [])
  .factory('middlaw', ['$rootScope', function($rootScope) {
    var scopePrototype = Object.getPrototypeOf($rootScope),
        cache = [];

    var colors = {
      '$apply': '#8e44ad',
      '$digest': '#3498db',
      '$timeout': '#f1c40f'
    };

    var getLineNumber = function () {
      return ((new Error).stack).split('\n')[3]
    };

    return {
      rewrite: function(attr, cb) {
        cache[attr] = scopePrototype[attr];

        scopePrototype[attr] = function $middleware() {
          console.log('%c[MIDDLAW] rewrite of %s\n%s', 'background-color: #FFF; color: ' + colors[attr] + ';', attr, getLineNumber());

          if (typeof cb === 'function')
            cb.call(this);

          cache[attr].apply(this, arguments);
        }
      }
    };
  }]);