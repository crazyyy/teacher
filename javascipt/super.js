function Human(name) {
  this.name= name;
}

Human.prototype.say = function(what) {
  console.log(this.name + ': ' + what);
}


var alex = new Human('Alex');
var jack = new Human('Jack');

alex.say('hi');
jack.say('hello');


alex.say.apply(jack,['hello']);


function speaksTo(someone) {
  console.log(this.name + " speaks to " + someone.name );
}


var jack = new Human('Jack');



var parent = { name : 'Alex' };
var child = Object.create(parent);
