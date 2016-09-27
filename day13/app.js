angular.module('MyApp', [])
.controller('MyController',[function (){
  var my = this;
  my.pattern = '^\\d+$';
  my.val = true;
}]);
