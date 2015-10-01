(function() {

  angular.module('exampleApp.controllers')
    .controller('exampleCtrl', ExampleCtrl);

  function ExampleCtrl($scope, $log, backendService)  {
    console.log('create exampleCtrl');

    $scope.getData = function() {
      backendService.getAlbums().then(function(data)  {      //dit wordt een asynchrone operatie, dus hier gebruik maken van de $q - service (zie backendservice)
        $scope.albums = data;
      });
    };

    $scope.submitForm = function()  {
      console.log("input: " + $scope.inputText);
    } ;

    $scope.$on('userclicked', function(event, data) {
      console.log(data);
      console.log(event);
      $scope.message = data.number;
    });

  }
})();
