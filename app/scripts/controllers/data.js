

(function() {
  angular.module('exampleApp.controllers')
    .controller('dataCtrl', DataCtrl);

  function DataCtrl($scope, $routeParams) {
    $scope.urlParam = $routeParams.exampleArg;
  }
})();
