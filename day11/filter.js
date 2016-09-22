angular.module('filter', ['filtDep'])
.filter('myOs',[function(fac){
  return function(systems,charFil) {
    var data = [];
    angular.forEach(systems, function(system){
      if(system.charAt(0).toLowerCase() == charFil.toLowerCase()) {
        data.push(system);
      }
    });
    return data;
  };
}])
.filter('stateFul',['factoryFilt',function(fac){
  this.$stateful = true;
  return function(systems) {
    var data = [];
    angular.forEach(systems, function(system){
      if(system.charAt(0).toLowerCase() == fac.index.toLowerCase()) {
        data.push(system);
      }
    });
    return data;
  };
}]);
