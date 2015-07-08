function getIt() { return this.x; }

var obj1 = { get : getIt(), x : 1 };
var obj2 = { get : getIt(), x : 2 };


function greeting(name) {
  var text = "Hello, " + name + "!";
  var greet = function() {
    console.log(text);
  }
  return greet;
}
