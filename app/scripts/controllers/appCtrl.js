(function() {
  angular.module('exampleApp.controllers')
    .controller('appCtrl', ['appTitle', '$location', AppCtrl]);        //hier geen array meegeven of hij zou opnieuw gemaakt worden


  //uglyfication/minification gaat de namen van de variableen aanpassen naar 'a', 'b', waardoor we de services kwijt geaken
  // maar past GEEN STRINGS AAN
  //STAP 1. Array maken van AppCtrl functie die we meegeven aan de .controller
  //STAP 2. de 'appTitl', '$location' hier meegeven als strings
  //STAP3. aan de functie AppCtrl() kunnen nu random namen meegeven
  //STAP4. gebruik de taak ngannotate en het werk out of the box (is automatisch)

  function AppCtrl(a,n)  {
    this.title = appTitle;                //deze var is nu op de scope aanwezig onder de naam 'title'


    this.goto = function() {
      $location.path('/data/456');
    }
  }
})();
