console.log('04-ES6-ARRAY-DESTRUCTURING');
//* 04-ES6-ARRAY-DESTRUCTURING
//* ===========================


//array
// const address = ['1299 S Juniper Street', 'Philadelphia', ' Pennsylvania', '19147'];
const address = [];

// destructuring
// gets the value by the location
//const [street, city, state, zip] = address;

// skips 1st and 2nd variable keeping the order
// SETS the default to NEW YORK
// const [, , state = 'New York'] = address;
const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);
console.log(`You are in ${state}.`);

//! ===================================
// ! CHALLENGE
// ! 1. GRAB 1st & THIRD items using Array destructuring
// ! CHALLENGE
//array
const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];
console.log(`A medium Coffee (hot) costs $2.50`)
//destructuring
const [itemName, , mediumPrice,] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
