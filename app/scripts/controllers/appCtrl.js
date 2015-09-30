(function() {
  angular.module('exampleApp.controllers')
    .controller('appCtrl', AppCtrl);        //hier geen array meegeven of hij zou opnieuw gemaakt worden

  function AppCtrl($scope, appTitle)  {
    $scope.title = appTitle;                //deze var is nu op de scope aanwezig onder de naam 'title'


    $scope.sendEvent = function() {
      $scope.$broadcast('userclicked', {number : 123});   //object meegeven om later te tonen dat we daar nog aankunnen
    }
  }
})();
