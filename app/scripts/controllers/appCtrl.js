(function() {
  angular.module('exampleApp.controllers')
    .controller('appCtrl', AppCtrl);        //hier geen array meegeven of hij zou opnieuw gemaakt worden

  function AppCtrl($scope, appTitle, $location)  {
    $scope.title = appTitle;                //deze var is nu op de scope aanwezig onder de naam 'title'

    $scope.value = 'this value is defined in the appCtrl';

    $scope.goto = function() {
      $location.path('/data/456');
    }
  }
})();
