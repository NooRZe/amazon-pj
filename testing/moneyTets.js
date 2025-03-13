import {fromatCurrency} from '../scripts/utils/money.js'; 

console.log('test suite: money format');
console.log('converts c to d');

if (fromatCurrency(2095) === '20.95') {
  console.log('pass');
} else {
  console.log('fail');
} 

console.log('chencking 0');

if (fromatCurrency(0) === '0.00') {
  console.log('pass');
} else {
  console.log('fail');
} 

console.log('round up');

if (fromatCurrency(2000.5) === '20.01') {
  console.log('pass');
} else {
  console.log('fail');
} 

console.log('round down');

if (fromatCurrency(2000.4) === '20.00') {
  console.log('pass');
} else {
  console.log('fail');
} 

