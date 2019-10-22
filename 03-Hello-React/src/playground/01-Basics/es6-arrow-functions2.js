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
        //const that = this;

        //this is bound to the 'user' array
        console.log(this.name);//this is ACCESSIBLE
        console.log(this.cities);

        //most popular function
        //MAP function
        const cityMessages = this.cities.map(() => {
            return city;

        });

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city); //THIS is NOT ACCESSIBLE
        });
    }
};
user.printPlacesLived();