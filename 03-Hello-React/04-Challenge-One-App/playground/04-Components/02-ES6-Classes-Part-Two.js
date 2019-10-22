console.log('ES6-Classes-Part-Two.js');

//class
class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;

    }
}

//subclass
class Student extends Person {
    //overrides Person constructor
    constructor(name, age, major) {
        super(name, age); //accesses original Person constructor data
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    //note ADD NEW METHODS
    getDescription(){// overrides original Parent behavior
        let description = super.getDescription();

        //if the student has a major
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    //note OVERRIDE ORIGINAL METHODS
    getGreeting(){
        let greeting = super.getGreeting();

        //if this.hasHomeLocation is TRUE.. RUN
        if(this.hasHomeLocation()) {
            greeting +=  ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}
//note Challenge
    // create sub-class Traveler = extend the Person class
    // Add support for homeLocation
    // override getGreeting() ->
        //1. Hi, I am Reign Westry. I'm visiting from Atlanta.
        // 2. Hi, I am Reign Westry. (if no homeLocation)
    const me = new Traveler('Reign Westry', 36, 'Atlanta');
    console.log(me);
    console.log(me.getGreeting());

    const other = new Traveler();
    console.log(other);
    console.log(other.getGreeting());

