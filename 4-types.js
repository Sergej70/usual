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

const cities = ['Kiev', 'Herson', 'Minsk'];

cities.unshift('Mytischi');
cities.push('Granada');

console.log(cities);   //  ["Mytishi", "Kiev", "Herson", "Minsk", "Granada"]; 

console.log('shift: ' + cities.shift());  // shift: Mytischi
console.log('pop: ' + cities.pop());      // pop: Granada 

console.log({ i }, typeof i);  // {i: 8} "number"
console.log({ f }, typeof f);  // {f: 12.4} "number"
console.log({ s }, typeof s);  // {s: "Hello"} "string"
console.log({ b }, typeof b);  // {b: true} "boolean

console.log({ person }, typeof person);   // {person: {...}} "object"
console.log({ isArray: Array.isArray(person) });  // {isArray: false}

console.log({ cities }, typeof cities);   // {cities: Array()} "object"
console.log({ isArray: Array.isArray(cities) });   // {isArray: true}

console.log({ instanceofArray: cities instanceof Array });  // {instanceofArray: true}
