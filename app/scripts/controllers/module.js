'use strict';

(function() {

  angular.module('exampleApp.controllers', ['exampleApp.config', 'ngRoute', 'exampleApp.services'])

  .config(function(apiUrl, $routeProvider, backendServiceProvider)  {     //hier backendServiceProvider (zelf niet gemaakt, Angular doet dit zelf (naam service + 'provider')
    console.log('controllers module config' + apiUrl);

      backendServiceProvider.setApiUrl(apiUrl);

      $routeProvider.when('/', {
        templateUrl: 'views/home.html'
      });

      $routeProvider.when('/about',  {
        templateUrl: 'views/about.html',
        controller: 'exampleCtrl'
      });

      $routeProvider.when('/data/:exampleArg', {
        templateUrl: 'views/data.html',
        controller: 'dataCtrl'
      });


      $routeProvider.otherwise( {
        redirectTo: '/'
      })




  }).run(function() {
    console.log('controllers module run');

  });



})();
