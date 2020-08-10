'use strict';

console.log('MAX_SAFE_INTEGER     =', Number.MAX_SAFE_INTEGER);
  // MAX_SAFE_INTEGER     = 9007199254740991
console.log('MAX_SAFE_INTEGER + 1 =', Number.MAX_SAFE_INTEGER + 1);
  // MAX_SAFE_INTEGER + 1 = 9007199254740992
console.log('MAX_SAFE_INTEGER + 2 =', Number.MAX_SAFE_INTEGER + 2);
  // MAX_SAFE_INTEGER + 2 = 9007199254740992

const max = 2 ** 52 - 1;
const biSafe = BigInt(max);
console.log('max =', max);
  // max = 9007199254740991
console.log('biSafe =', biSafe);
  // biSafe = 9007199254740991n

console.log('typeof max =', typeof max);
  // typeof max == number
console.log('typeof biSafe =', typeof biSafe);
  // typeof biSafe === bigint
console.log('if (max === biSafe) :', max === biSafe);
  // if (max === biSafe) : false
console.log('if (max == biSafe) :', max == biSafe);
  // if (max == biSafe) : true

console.log('biSafe      =', biSafe);
  // biSafe      = 4503599627370495n
console.log('biSafe + 1n =', biSafe + 1n);
  // biSafe + 1n = 4503599627370496n
console.log('biSafe + 2n =', biSafe + 2n);
  // biSafe + 2n = 4503599627370497n
console.log('');

console.log('15n / 3n =', 15n / 3n);
  // 15n / 3n = 5n
console.log('3n / 2n =', 3n / 2n);
  // 3n / 2n = 1n
console.log('BigInt(3n / 2n) =', BigInt(3n / 2n));
  // BigInt(3n / 2n) = 1n
  console.log('');

//console.log('BigInt(\'1.5\') =', BigInt('1.5'));
  // SyntaxError: Cannot convert 1.5 to a BigInt 
  // at BigInt (<anonymous>)

//console.log('BigInt(1.5) =', BigInt(1.5));
  // RangeError: The number 1.5 cannot be converted to a BigInt 
  // because it is not an integer
console.log('');

console.log('2n > 1n =', 2n > 1n);
  // 2n > 1n = true
console.log('2n > 1 =', 2n > 1);
  // 2n > 1 = true
console.log('');

console.log('(1000n ** 200n) / 12321n =', (1000n ** 20n) / 12321n ** 10n);
  // (1000n ** 200n) / 12321n = 12403390708964314479n
  console.log('');

const array1 = [-2, 7, 1n, 3, -2n, 8n, 5, -4n];
console.log(array1);
  // (8) [-2, 7, 1n, 3, -2n, 8n, 5, -4n]
console.log(array1.sort());
  // (8) [-2, -2n, -4n, 1n, 3, 5, 7, 8n]
console.log('');

const array2 = [3, -2, 7n, -5, -1n, 2, 5, 0];
console.log(array2);
  // (8) [3, -2, 7n, -5, -1n, 2, 5, 0]
console.log(array2.sort());
  // (8) [-1n, -2, -5, 0, 2, 3, 5, 7n]

  // https://github.com/tc39/proposal-bigint
