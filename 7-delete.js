'use strict';

const org = "HowProgrammingWorks";

// delete org; // Raises SyntaxError in strict mode

const country = {
  name: 'Chile',
  rule: 'Augusto Pinocheto',
  born: 1915,
  alive: false 
};

delete country.rule;
console.log(country);   // {name: "Chile", born: 1915, alive: false}

delete country.born;
//delete country.population;  ???
console.log(country);  // {name: "Chile", alive: false}

const currencies = ['BTC', 'EUR', 'UAN', 'USD'];

console.log('currencies[1]: ', currencies[1], 1 in currencies);     // currencies[1]: EUR true
console.log('currencies[2]: ', currencies[2], 2 in currencies);     // currencies[2]: UAN true

delete currencies[1];
console.log(currencies);     // (4) ["BTC", empty, "UAN", "USD"]

currencies[2] = undefined;   
//console.log(currencies[2]) // undefined

console.dir({currencies});   //currencies: (4) ["BTC", empty, undefined, "USD "] 

console.log('currencies[1]:', currencies[1], 1 in currencies); //currencies[1]: undefined false
console.log('currencies[2]:', currencies[2], 2 in currencies); //currencies[2]: undefined true
