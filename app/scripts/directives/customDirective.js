(function() {

  angular.module('exampleApp.directives')
    .directive('customDirective', function() {
      return {
        templateUrl: 'views/customDirective.html',
        restrict: 'EA',         //E : alleen als element, EA: zowel als element als attribuut
        scope: {

        }
      }
    });
})();
