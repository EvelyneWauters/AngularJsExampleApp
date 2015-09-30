(function() {
  angular.module('exampleApp.controllers')
    .controller('appCtrl', AppCtrl);        //hier geen array meegeven of hij zou opnieuw gemaakt worden

  function AppCtrl(appTitle)  {
    this.title = appTitle;                //deze var is nu op de scope aanwezig onder de naam 'title'


  }
})();
