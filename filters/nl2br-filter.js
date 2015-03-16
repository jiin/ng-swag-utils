angular.module('nl2brFilter', [])
  .filter('nl2br', function () {
    return function (text) {
      return (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
    }
  });