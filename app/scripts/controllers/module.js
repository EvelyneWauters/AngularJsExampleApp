'use strict';

(function() {

  angular.module('exampleApp.controllers', ['exampleApp.config', 'ngRoute'])

  .config(function(apiUrl, $routeProvider)  {
    console.log('controllers module config' + apiUrl);

      $routeProvider.when('/', {
        templateUrl: 'views/home.html'
      });

      $routeProvider.when('/about',  {
        templateUrl: 'views/about.html'
      });

      $routeProvider.otherwise( {
        redirectTo: '/'
      })




  }).run(function() {
    console.log('controllers module run');

  });



})();
