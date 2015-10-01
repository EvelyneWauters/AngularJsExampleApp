(function () {

  angular.module('exampleApp.services')
    .factory('backendService', function ($http, apiUrl, $q) {     //nu met de service methode geimplementeerd

        this.getAlbums= function () {

          var defer = $q.defer();


          $http.get(apiUrl + '/albums').then(function (response) {
            var albums = response.data;
            defer.resolve(albums);
          });

          return defer.promise;

        }


    });
})();
