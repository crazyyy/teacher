'use strict';

// function greet(greeting, name) {
//   if (greeting !== undefined && name !== undefined) {
//     console.log(`${greeting} ${name}`)
//   } else if (greeting === undefined && name !== undefined) {
//     console.log(`Hello ${name}`)
//   } else if ( greeting !== undefined && name === undefined ) {
//     console.log(`${greeting} friend`)
//   } else {
//     console.log(`Hello friend`)
//   }
// }

function greet() {
  var greeting = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
  var name = arguments.length <= 1 || arguments[1] === undefined ? 'friend' : arguments[1];

  console.log(greeting + ' ' + name);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

sum(5, 7, 2, 10, 3);

function sum() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  values.forEach(function (value) {
    sum += value;
  });

  console.log(sum);
}