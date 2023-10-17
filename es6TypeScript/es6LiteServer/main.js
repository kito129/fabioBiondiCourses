// main.js
import addOperation from './utility.js'; // The requested module './utility.js' does not provide an export named 'default'
import { add as newAdd } from './operations.js';

console.log(addOperation(1, 4))
console.log(newAdd(5))