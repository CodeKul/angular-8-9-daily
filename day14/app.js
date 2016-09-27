angular.module('MyApp', [])
.controller('MyController',[function(){
  var my = this;
  my.myName  = 'Android';
  my.mobiles = ['Pixel','Apple 6', 'Nexus','Samsung','Moto'];
}])
.directive('myDir',[function(){
  return {
    template :'my is {{my.myName}}'
  };
}])
.directive('myOtherDir',[function(){
  return {
    templateUrl : 'my-other-dir.html'
  };
}])
.directive('myOneDir',[function(){
  return {
    templateUrl : function(element, attribute){
      return attribute.tnm + '.html';
    }
  };
}]);
