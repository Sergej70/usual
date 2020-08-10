let scalar1 = 5;
let scalar2 = scalar1;

scalar1--; // 4
scalar2++; // 6

console.dir({ scalar1, scalar2 });  // Object { scalar1:4, scalar2:6 };

const object1 = { field: 6 };
const object2 = object1;
object1.field = 6;

console.log({ object1, object2 });
/*
{object1: {…}, object2: {…}}
object1: {field: 6}
object2: {field: 6}
__proto__: Object
*/
