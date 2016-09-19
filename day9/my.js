
var globalVar = {

    engine : function(){
      return new Engine(2);
    }
};

function Car(engine){
  // car is dependent on engine
  //this.engine = new Engine(4);

  //this.engine = globalVar.engine();

  this.engine = engine;
}

function Engine(type){
  this.type = type;
}

function createCar(){

  var eng = new Engine(4);
  var car = new Car(eng)
}
