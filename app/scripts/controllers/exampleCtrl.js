(function() {

  angular.module('exampleApp.controllers')
    .controller('exampleCtrl', ExampleCtrl);

  function ExampleCtrl($scope)  {
    console.log('create exampleCtrl');

    $scope.data = [
      {prop:'a'},
      {prop:'b'},
      {prop:'c'},
      {prop:'d'},
      {prop:'e'}];


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
