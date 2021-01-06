/**
 * commonJS module for nodejs -> exports.module & require
 */
//const Stack = require('./stackClass');

/**
 * ES6 module notation -> import stack
 */
import {Stack} from './stackClass.js'

const s = new Stack();
s.push('a');
s.push('b');
s.push('c');


console.log(s.count);
console.log(s.peek());

console.log(s.pop());
console.log(s.peek());