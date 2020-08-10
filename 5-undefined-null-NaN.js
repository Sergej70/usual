'use strict';

// undefined
let emptyScalar;
//console.log({ emptyScalar }, typeof emptyScalar);  // {emptyScalar: undefined} "undefined"

// null
const emptyObject = null;
//console.log({ emptyObject }, typeof emptyObject); //{emptyObject: null} "object"

// NaN
let count = NaN;
//console.log({ count }, typeof count);  // {count: NaN} "number"

count = undefined + 1;
//console.log({ count });  //{count: NaN} 
//console.dir({ count })  // Object

//console.log(Infinity, -Infinity, typeof Infinity); // Infinity -Infinity "number"

const s = (
  emptyObject === null ?
    'emptyObject is null' :
    'emptyObject is not null'
);
//console.log(s);    // emptyObject is null
