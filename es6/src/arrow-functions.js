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
