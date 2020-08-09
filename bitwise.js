'use strict';

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2); 
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(a + ' to base 2: ' + aBinary); 
  // 9 to base 2: 1001
console.log(b + ' to base 2: ' + bBinary); 
  //14 to base 2: 1110

console.log('Bitwise operators');

console.log(a + ' & ' + b + ' = ' + (a & b)); 
  // 9 & 14 = 8
console.log(aBinary + ' & ' + bBinary + ' = '  + (a & b).toString(2));
  // 1001 & 1110 = 1000

console.log(a + ' | ' + b, ' = ', (a | b) );
  // 9 | 14 = 15

console.log(a + ' ^ '+ b, ' = ', (a ^ b));
   // 9 ^ 14 = 7
console.log(aBinary + ' ^ ' + bBinary + ' = ' + (a ^ b).toString(2));
  // 1001 ^ 1110 = 111

console.log('~' + a + ' = ' + ~a);
  //~9 = -10
console.log('~' + aBinary + ' = ' + (~a).toString(2));
  //~9 = -10

console.log(a + ' << ' + 2 + ' = ', a << 2);
  // 9 << 2 =  36
console.log(aBinary + ' << ' + 2 + ' = ' + (a << 2).toString(2));
  // 1001 << 2 = 100100

console.log(a + ' << ' + 2 + ' = ', a << 2);
  // 9 << 2 = 36
console.log(aBinary + ' << ' + 2 + ' = '+ (a << 2).toString(2));
  // 1001 << 2 = 100100

console.log(b + ' >> ' + 2 + ' = ', b >> 2);
  // 14 >> 2 = 3
console.log(b + ' >>> ' + 2 + ' = ', b >>> 2);
  // 14 >>> 2 = 3
console.log(bBinary + ' >> ' + 2 + ' = ' + (b >> 2).toString(2));
  // 1110 >> 2 = 11
console.log(bBinary + ' >>> ' + 2 + ' = ' + (b >>> 2).toString(2));
  // 1110 >>> 2 = 11
