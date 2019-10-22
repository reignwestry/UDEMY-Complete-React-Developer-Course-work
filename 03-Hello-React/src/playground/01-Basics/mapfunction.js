//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    //console.log(arguments); == displays arguments
    return a + b;
};
//console.log(add(argumentOne, argumentTwo));
console.log(add(55, 1, 1001));

// this keyword - no longer bound
const user = {
    name: 'Reign',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    //anonymous function
    printPlacesLived: function () {

        //most popular function
        //MAP function (verbose) == transforms the item into a array
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;

        // });
        // return cityMessages;

        //shorthand
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// note Challenge Area

const multiplier = {
    //numbers - array of numbers
        numbers: [10, 20, 30],

    // multiplyBy - single number
        mulitplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        // grabs each numbers array value as numbers
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());