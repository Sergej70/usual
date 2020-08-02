'use stict';

const i = 8;
const f = 12.4;
const s = 'Hello';
const b = true;

const person = {
    name: 'Sergii Kruk',
    born: 70,
    city: 'Herson',
    position: 'man'
}

//console.dir(person.city);  //Herson

person.city = 'Kokchetav';

//console.log(person.city);  //Kokchetav

console.log('shift: ' + cities.shift());  // shift: Mytischi
console.log('pop: ' + cities.pop());      // pop: Granada 

console.log({ i }, typeof i);  // {i: 8} "number"
console.log({ f }, typeof f);  // {f: 12.4} "number"
console.log({ s }, typeof s);  // {s: "Hello"} "string"
console.log({ b }, typeof b);  // {b: true} "boolean
