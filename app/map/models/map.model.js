angular.module('app.model.map', [])
  .factory('Map', function ($http) {
    var mapInstance = {};

    // Returns a promise containing nearby Chase locations based 
    // on the input latitude and longitue.
    mapInstance.getLocations = function(lat, lng) {
      return $http({
        url: 'https://m.chase.com/PSRWeb/location/list.action?lat='+lat+'&lng='+lng,
        method: 'GET'
      });
    };

    return mapInstance;
  });
