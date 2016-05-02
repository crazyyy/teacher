'use strict';

var add = function add(x, y) {
  return x + y;
};

var square = function square(x) {
  return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
  return 42;
};

var log = function log() {
  return console.log('loggin');
};

var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};

var getPerson = function getPerson() {
  return { name: 'John' };
};

(function () {
  return console.log('IIFE');
})();

console.log(add(2, 5));

console.log(square(9));