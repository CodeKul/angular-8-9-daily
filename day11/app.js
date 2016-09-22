angular.module('MyApp', ['filter'])
.controller('MyController',['myOsFilter','stateFulFilter',function(filter,stateFul){
  var my = this;
  my.money = 1000000;
  my.systems = ['Windows','Android','Rim','Symbian','Apple'];
  my.filtered = filter(my.systems,'A');
  my.stateFul = stateFul(my.systems);
}]);
