var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User(db.getPhrase("Vasya")),
    petya = new User(db.getPhrase("Petya"));

  vasya.hello(petya);
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
