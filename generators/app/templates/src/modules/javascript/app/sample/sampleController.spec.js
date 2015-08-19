describe('Unit: sampleController', function() {
 
  require('angular-mocks/ngMock');
  
  var scope, ctrl;



  beforeEach(function(){
    angular.mock.module('<%= appname %>');
    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('sampleController', { $scope: scope });
      scope.$digest();
    });
  });


  it('should have logic', function() {
    expect(true).toBeTruthy();
  });


});


