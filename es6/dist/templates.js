'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
  console.log(('Hello ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject: ' + subject + '\n    Message: ' + message + '\n  ');
}

var mailArray = ['crazyyy@gmail.com', 'info@google.com', 'Lorem Ispum', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque natus ex fugit, soluta aliquam illum sapiente adipisci nostrum nemo provident recusandae cumque excepturi minima. Illum libero fugiat est cum laudantium!'];

createEmail.apply(undefined, mailArray);

function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add('5', '7');

var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals) {
  return literals[0] + value.toUpperCase();
}