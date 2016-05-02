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

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;

numbers.forEach(function (num) {
  sum += num;
});

numbers.forEach(function (num) {
  return sum += num;
});

let square2 = numbers.map(n => n * n);

console.log(sum);

console.log(square2);
