//es6-let-const
var nameVar = 'Reign';
var nameVar = 'John';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Juliet';
// can not re-define the variable
//let nameLet = 'Joe';
console.log('nameLet', nameLet);

const nameConst = 'Frank'; //permanenet variable
// can not re-assign the variable
//const nameConst = 'Jim';

console.log('nameConst' , nameConst);



function getPetName() {
    var petName = 'Hal';
    return petName;

}
getPetName();
//console.log(petName);

//note variables should be BLOCK-LEVEL SCOPED
//note NEVER USE VAR ONLY const & let
// var are function-level scoped == bound to function blocks
//let & const are BLOCK-level scoping = bound to code blocks
const fullName = 'Andrew Mead';
let firstName;
if (fullName){
    firstName = fullName.split(' ')[0]; //.split()[] == splits variables by spacing and removes spaces
    console.log(firstName);
}
console.log(firstName);