import { createStore } from 'redux';
//# import { createStore } from 'redux';
//# 03-ES6-Object-Destructuring
console.log('03-ES6-Object-Destructuring');
/** NOTE
 * Object-Destructuring
 * ---------------------
 * Allows you to easily work with arrays and objects
 * Pulls arrays and objects apart (PULL off properties into their own variables)
 * CREATES easier to read CODE
 * 
 *  3 FEATURES
 * ==================
 * 1. DESTRUCTURING 
 * 2. RENAME LOCAL VARIABLE WE CREATE
 * 3. ABILITY TO SETUP DEFAULT VALUES
 * 
 */


 //? object
const person = {
    name: 'Reign',
    age: 26,
    location: {
        city: 'Atlanta',
        temp: 88
    }
};

//SAME as below
const { name, age } = person;
//const name = person.name;
//const age = person.age;

console.log(  `It's ${person.location.temp} in ${person.location.city}.+ "(DESTRUCTURING AN OBJECT)"`  );




//* INTERPULATING THE NAME
console.log(`${person.name} is ${person.age}.`);
/*
if ( person.location.city && person.location.temp) {
    console.log(  `It's ${person.location.temp} in ${person.location.city}.`  );
}
*/
//* DESTRUCTURING AN OBJECT
//? broke city & temp into their own variable from person object
/*
const {city, temp} = person.location;
if ( city && temp) {
    console.log(  `It's ${temp} in ${city}.`  );
}
*/

//* RENAMING temp variable == loses access to temp variable
const {city, temp: temperature } = person.location;
if ( city && temperature) {
    console.log(  `It's ${temperature} in ${city}.`  );
}



