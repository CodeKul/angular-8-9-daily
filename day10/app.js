'use strict'
//var my = 10;
angular.module('MyApp', [])
.controller('MyController',[function(){

    'use strict'

    var my = this;
    my.imgVal = 'hulk.jpg';

    my.cities = ['Pune','Mumbai','Nagpur','Akola','Sangli','Kolhapur'];
    my.hobby = {
      name : 'Coding',
      lang : 'Java'
    };

    my.click = function(ev){
      my.ev = ev;
    };

    my.change = function(){
      my.cnt = Math.random() * 100;
    };

    my.image = function(img){
      my.imgVal = img + '.jpg';
    }
}]);

eval(a.b.c);
