

(function() {

    angular.module('exampleApp', ['exampleApp.controllers'])

    .config(function()  {
      console.log('app config');


    }).run(function() {
      console.log('app run');


    });



})();
