(function() {

  angular.module('exampleApp.controllers')
    .controller('exampleCtrl', ExampleCtrl);

  function ExampleCtrl($scope)  {
    console.log('create exampleCtrl');

    $scope.$on('userclicked', function(event, data) {
      console.log(data);
      console.log(event);
      $scope.message = data.number;
    })
  }
})();
