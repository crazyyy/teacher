function greeting(name) {
  var text = "Hello " + name + "!";
  var greet = function () {
    console.log(text);
  };
  return greet;
}

var a1 = greeting('Vitaly');

var a2 = greeting('Alex');



function Human(name) {
  this.name = name;
}


Human.prototype.say = function(what) {
  console.log(this.name + ': ' + what);
}


var alex = new Human('Alex');


function Human(name) {
  if (! (this instanceof Human)) {
    return new Human(name);
  } else {
    this.name = name;
  }
}
