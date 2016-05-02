let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('loggin');

let multiply = (x,y) => {
  let result = x * y;
  return result;
}

let getPerson = () => ( { name: 'John'} );

(() => console.log('IIFE'))();

console.log(add(2,5));

console.log(square(9));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});

numbers.forEach(num => sum += num);

console.log(sum);
