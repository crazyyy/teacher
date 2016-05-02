'use strict';

var _counter = require('./counter');

var counter = _interopRequireWildcard(_counter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
counter.decrement();
console.log(counter.counter); // 2