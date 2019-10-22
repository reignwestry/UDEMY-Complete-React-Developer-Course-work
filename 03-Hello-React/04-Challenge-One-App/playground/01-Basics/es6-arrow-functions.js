//NOTE es6-arrow-functions

const square = function(x) {
 return x * x;

};

console.log(square(8));
//note arrow function - verbose
    //always anonymous functions - the only way to assign a arrow function is to define it to a variable
const squareArrow = (x) => {
    return x * x;
};
console.log("squareArrow " + squareArrow(9));


//alternate method to write - how it should be written
const squareArrowTwo = (x) => x * x;
console.log("squareArrowTwo " + squareArrowTwo(5));

//Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const wholeName = 'Mike Smith';
//arrow function (verbose - expression version)
const getFirstNameOne = (fullName) => {
   return fullName.split(' ')[0];
}
console.log("getFirstNameOne " + getFirstNameOne(wholeName));


//arrow function (shorthand)
const entireName = 'Reign Westry';
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log("getFirstName " + getFirstName(entireName));

//==============================================================
