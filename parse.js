'use strict';

//console.log(parseInt('11', 2));  // 3
//console.log(parseInt('11', 8));  // 9
//console.log(parseInt('11', 16)); // 17

console.log(parseInt(5, 10));    // 5
console.log(parseInt('5', 10));  // 5
console.log(parseInt('+5', 10)); // 5
console.log(parseInt('5mm', 10)); // 5

console.log(parseInt('(5)', 10)); // NaN
console.log(parseInt('"5"', 10)); // NaN
console.log(parseInt('[5]', 10)); // NaN

console.log(parseInt('NaN', 10));       // NaN
console.log(parseInt(Infinity, 10));    // NaN
console.log(parseInt('Infinity', 10));  // NaN 
console.log(parseInt('-Infinity', 10)); // NaN

console.log(5.1, parseInt(5.1, 10));                        // 5
console.log(5.1 * 1e50, parseInt(5.1 * 1e50, 10));          // 5
console.log(0.0000000000005, parseInt(0.000000000005, 10)); // 5
console.log(0.0000005, parseInt(0.0000005, 10));            // 5
console.log(0.000005, parseInt(0.000005, 10));              // 0

// 255
console.log(parseInt('ff', 16));       
console.log(parseInt('0xff', 16));
console.log(parseInt('0xFf', 16));
console.log(parseInt('  0xFf  ', 16));

//NaN
console.log(parseInt('ff', 2));
console.log(parseInt('ff', 8));
console.log(parseInt('ff', 10));
console.log(parseInt('ff', 15));

console.log(parseInt('ff', 16)); // 255
console.log(parseInt('ff', 17)); // 270
console.log(parseInt('ff', 18)); // 285
console.log(parseInt('ff', 19)); // 300
console.log(parseInt('ff', 20)); // 315
console.log(parseInt('ff', 30)); // 465
console.log(parseInt('ff', 32)); // 495
console.log(parseInt('ff', 34)); // 525
console.log(parseInt('ff', 36)); // 555
console.log(parseInt('ff', 37)); // NaN

// 3.14
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('3.14text'));
console.log(parseFloat('0.0314E+2'));

// 5
console.log(parseFloat('5'));
console.log(parseFloat('5.0'));
console.log(parseFloat('5.0000000000000001'));

console.log(parseFloat('5.1'));
console.log(parseFloat('5.000000000000001'));

console.log(parseFloat('100'));
console.log(parseFloat('-100'));
console.log(parseFloat(+100));

// 5
console.log(parseFloat(5));
console.log(parseFloat('5'));
console.log(parseFloat(+5));
console.log(parseFloat('5mm'));

// NaN
console.log(parseFloat('(5'));
console.log(parseFloat('"5"'));
console.log(parseFloat('[5]'));

// Infinity
console.log(parseFloat('NaN'));        // NaN ?
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));  // -Infinity ?
