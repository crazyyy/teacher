'use strict';

var firstName = 'Vitali',
    lastName = 'Antoniuk',
    email = 'crazyyy@gmail.com';

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function sayHello() {
    console.log('Hi my name if ' + this.firstName + ' ' + this.lastName + ', and my email is ' + this.email + ' ');
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

// Object.defineProperty(person, 'fullName', {
//   get: function() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function(value){
//     this.firstName = value;
//   }
// })

console.log(person);
// person.sayHello();

// person.firstName;
// person['firstName'];

// let property = 'firstName';
// person[property];

// person = {
//   [property]: 'Bill'
// }

// function createCar(property, value) {
//   return {
//     [property]: value,
//     ['_' + property]: value,
//     [property.toUpperCase()]: value,
//     ['get' + property]() {
//       this[property]
//     }
//   };
// }

// console.log(createCar('vin', '1'))