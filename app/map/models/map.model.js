angular.module('app.model.map', [])
  .factory('Map', function ($http, $q) {
    var mapInstance = {};

    // Returns a promise containing nearby Chase locations based 
    // on the input latitude and longitude.
    mapInstance.getLocations = function(latitude, longitude) {
      return $http({
        url: 'https://m.chase.com/PSRWeb/location/list.action',
        method: 'GET',
        params: {
          lat: latitude,
          lng: longitude
        }
      });
    };

    // Sets the geoLocation property on the factory object using the browser's
    // geolocation API.
    mapInstance.getGeoLocation = function() {
      var promise = $q.defer();
      window.navigator.geolocation.getCurrentPosition(function(location) {
        this.geoLocation = location;
        promise.resolve(location);
      }.bind(this));
      return promise.promise;
    }

    return mapInstance;
  });
