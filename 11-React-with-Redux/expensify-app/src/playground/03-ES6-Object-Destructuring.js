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



console.log(  `It's ${person.location.temp} in ${person.location.city}.+ "(DESTRUCTURING AN OBJECT)"`  );




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

//SAME as below
//* SET default value of name to Anonymous
//? ONLY shows the default value if there is no name value
// const { name = "Anonymous", age } = person;
//* SETS local const firstname value to "Anonymous"
const { name: firstName = "Anonymous", age } = person;
//const name = person.name;
//const age = person.age;

//* INTERPULATING THE NAME
console.log(`${firstName} is ${person.age}.`);

//! ===================================================
//! CHALLENGE
//! 1. SET publisherName  = Penguin, default: Self-Published

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); //Penguin, DEFAULT : Self-Published