console.log('ES6-Classes-Part-One');

// note CHALLENGE
//Setup constructor to take name and age (default to 0 )
//getDescription - Reign Westry is 37 year(s) old.

class Person {
    //define class

    //constructor function === runs when a new instance is created
    constructor(/* default value for arguments */ name = 'Anonymous', age = 0) {


        this.name = name;
        this.age = age;
    }

    //method
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!' ;

        //ES6 TEMPLATE Strings === can inject strings, expressions, or functions
        return `Hi. I am ${this.name}!`;
    }

    getDescription () {
        return  `${this.name} is ${this.age} years old.`;
    }
}

//new instance of Person
const me = new Person("Reign Westry",37);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());