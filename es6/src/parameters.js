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

function greet(greeting = 'Hello', name = 'friend')  {
  console.log(`${greeting} ${name}`)
}


greet('Hi', 'Bill')
greet('Hi')
greet(undefined, 'Bill')
greet()


sum(5,7,2,10,3)

function sum(...values) {
  let  sum = 0;

  values.forEach(function (value) {
    sum += value;
  })

  console.log(sum)

}
