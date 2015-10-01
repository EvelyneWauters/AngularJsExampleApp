(function() {

  angular.module('exampleApp.directives')
    .directive('simpleDirective', function()  {

      //geeft opnieuw een functie terug die de directive gaat bevatten
      return function(scopeParent, element, attrs) {        //scope wordt sowieso meegegeven in deze  manier
        element.text('from directive');                     //gaat de tekst 'from directive' toevoegen aan het element

      }
    });

})();
