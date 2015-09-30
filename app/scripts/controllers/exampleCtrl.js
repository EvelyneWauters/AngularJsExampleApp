(function() {

  angular.module('exampleApp.controllers')
    .controller('exampleCtrl', ExampleCtrl);

  function ExampleCtrl($scope, apiUrl, $http, $log)  {
    console.log('create exampleCtrl');

    $scope.getData = function() {
      $http.get(apiUrl + '/albums').then(function(response)  {
        $log.debug(response);
        $scope.albums = response.data;
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
