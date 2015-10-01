(function () {

  angular.module('exampleApp.services')
    .provider('backendService', function () {
        var url;

      //dit geeft een provider terug
      return {

        //bijkomende functie om de service te configureren
        setApiUrl: function(apiUrl) {
          url = apiUrl;
        },

        $get: function ($http, $q) {
          //dit geeft een service terug, dus hier moeten $http en $q geïnjecteerd worden
          return {

            getAlbums: function ($http) {
              var defer = $q.defer();
              $http.get(url + '/albums').then(function (response) {
                defer.resolve(response.data);
              });
              return defer.promise;
            }
          }
        }

      }

    });
})();
