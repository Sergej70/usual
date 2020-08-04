'use strict';

//console.log(parseInt('11', 2));  // 3
//console.log(parseInt('11', 8));  // 9
//console.log(parseInt('11', 16)); // 17

//console.log(parseInt(5, 10));    // 5
//console.log(parseInt('5', 10));  // 5
//console.log(parseInt('+5', 10)); // 5
//console.log(parseInt('5mm', 10)); // 5

//console.log(parseInt('(5)', 10)); // NaN
//console.log(parseInt('"5"', 10)); // NaN
//console.log(parseInt('[5]', 10)); // NaN

//console.log(parseInt('NaN', 10));       // NaN
//console.log(parseInt(Infinity, 10));    // NaN
//console.log(parseInt('Infinity', 10));  // NaN 
//console.log(parseInt('-Infinity', 10)); // NaN

//console.log(5.1, parseInt(5.1, 10));                        // 5
//console.log(5.1 * 1e50, parseInt(5.1 * 1e50, 10));          // 5
//console.log(0.0000000000005, parseInt(0.000000000005, 10)); // 5
//console.log(0.0000005, parseInt(0.0000005, 10));            // 5
//console.log(0.000005, parseInt(0.000005, 10));              // 0
