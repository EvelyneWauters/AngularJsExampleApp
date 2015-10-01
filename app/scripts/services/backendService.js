(function () {

  angular.module('exampleApp.services')
    .factory('backendService', function ($http, apiUrl, $q) {     //de factory methode geeft een object terug, dus return {}

      return {

        getAlbums: function () {

          var defer = $q.defer();


          $http.get(apiUrl + '/albums').then(function (response) {
            var albums = response.data;
            defer.resolve(albums);
          });

          return defer.promise;

        }

      }

    });
})();
