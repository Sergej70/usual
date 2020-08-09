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
