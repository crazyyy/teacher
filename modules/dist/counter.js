"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
var counter = exports.counter = 1;

function increment() {
  exports.counter = counter += 1;
}

function decrement() {
  exports.counter = counter -= 1;
}