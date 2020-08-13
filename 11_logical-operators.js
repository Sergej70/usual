'us strict';

const tea = true;
const juice = true;

const vodka = false;
const beer = false;

const goodDrinks = tea && juice;    // true
const badDrinks = vodka && beer;    // false
const badMix = vodka && juice;      // false

//console.log('...Logical operator AND (&&)...');
