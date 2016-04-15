function greet(name) {
  console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
  `)
}

let mailArray = ['crazyyy@gmail.com', 'info@google.com', 'Lorem Ispum', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque natus ex fugit, soluta aliquam illum sapiente adipisci nostrum nemo provident recusandae cumque excepturi minima. Illum libero fugiat est cum laudantium!']

createEmail(...mailArray);


function add(x,y) {
  console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('5','7')


let name = 'Bill';
console.log(upperName`Hello ${name}`)

function upperName(literals, ...values) {
  return literals[0] + value.toUpperCase();
}
