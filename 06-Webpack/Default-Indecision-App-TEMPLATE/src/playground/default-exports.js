//! import whole file
//import './utils.js'

//note import specific from file
//default exports must come before the curly braces
import subtract, {
    square,
    add
} from './utils';

import {
    canDrink,
    isAdult
} from "./person";

'./person';

console.log('app.js is running');
console.log(square(4)); //note calls square function from utils import
console.log(add(100, 23));
console.log(subtract(5, 2));

//! CHALLENGE
//! CREATE A new person.js
//! CREATE a named export isAdult(18 )  - true if adult otherwise false
//! CREATE a named  export canDrink(18) - true if 21 and over, otherwise false
//! import isAdult and canDrink
//! use both printing result to the console

console.log(" isAdult: " + isAdult(21));
console.log("canDrink: " + canDrink(16));