describe('Map Model', function(){
  var Map, $httpBackend
  //mock Application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('app.model.map'));
  //mock the controller for the same reason and include $rootScope and $controller
  beforeEach(angular.mock.inject(function(_Map_, _$httpBackend_) {
    Map = _Map_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // tests start here
  it('Should have a getLocations method', function(){
    expect(Map.getLocations).toBeDefined();
  });
  it('Should have a getGeoLocation method', function(){
    expect(Map.getGeoLocation).toBeDefined();
  });
});
