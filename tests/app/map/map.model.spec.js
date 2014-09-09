describe('Map Model', function(){
  var Map;

  // Mock application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('app.model.map'));
  
  beforeEach(angular.mock.inject(function(_Map_) {
    Map = _Map_;
  }));

  it('Should have a getLocations method', function(){
    expect(Map.getLocations).toBeDefined();
  });
  it('Should have a getGeoLocation method', function(){
    expect(Map.getGeoLocation).toBeDefined();
  });
});
