
function MyController(scp,my) {
  scp.hello = 'hi';
};

MyController.$inject = ['$scope','myService'];

angular.module('MyApp', [])
.controller('MyController',MyController)
.controller('OtherController',function ($scope){
  $scope.hello = 'Hi';
})
.factory('myService',[function myService() {
  return {'my':'hello'};
}]);


var injector = angular.injector(['ng','MyApp']);
injector.instantiate(MyController);

var myService = injector.get('myService');
console.log('Service - '+myService.my);
