console.log('App.js is running!');

//note JSX - Javascript XML
//=====================

// static data
const template =(
    <div>
        <h1>Indecision app</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>);


//note Challenge One #all data is static
const userName = 'Reign Westry';
const userAge = 35;
const userLocation = 'Atlanta';
const templateTwo = (
    <div>
        <h1> {userName.toUpperCase()}</h1>
        <p> Age: <span>{userAge}</span> </p>
        <p> Location: <span>{userLocation}</span> </p>
    </div>
);

//note REFERENCING DATA through a object
//==================================

//js OBJECT
const user = {
    name: 'Reign',
    age: 35,
    location: 'Atanta'
};
const templateThree = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

//note challengeTwo
// create app object title/subtitle
// use title/subtitle in the template
// render templateFour

const header = {
    title: 'Indecision App',
    subtitle: 'First Step to success'
}

let challengeTwo = (
    <div>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
    </div>
);

// note CONDITIONAL RENDERING
//===========================

/*
 *REMINDER IT IS LIVE UP ABOVE*
let user = {
    name: 'Reign',
    age: 35,
    location: 'Atlanta'
}
*/

    // if statements (arrow function)
    function getLocation(location) {
        //if location exists
        if (location) {
            return <p>Location: {location}</p>;
        } else {
            // returns unknown if there is no value
            return 'Unknown';
        }


    }

    // ternary operators
    /*
        ? if value IS 'Reign' use Reign
            true ? 'Reign' : 'Anonymous'
        ? if value IS NOT 'Reign use Anonymous
            false ? 'Reign' : 'Anonymous'

    */

    // logical and operator
    /*
        undefined booleans are ignored by JSX



    */



var templateFive = (
    <div>
        {//? Ternary Operator
        }
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {//
        }


        {//? AND Operator
        }
        { // if user.age && user.age is less than 18 display: Age: {user.age}
        }
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}

        {/* ? location function call


            if "no value/undefined" nothing shows
        */
        }
        {getLocation(user.location)}
    </div>
);

//note ChallengeThree
//note =====================
//only render the subtitle (and p tag) if subtitle exist - logical AND operator
//render new p tag - if options.length > 0 "Here are your options" "No Options"
let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    //options ARRAY
    options: ['One', 'Two']
}

function getSubtitle(subtitle) {
    if(subtitle){
        return <p>{subtitle}</p>;
    }
}

let challengeThree = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ app.options.length > 0 ? 'Here is your options: ' : 'No Options'} </p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>

        </ol>
    </div>
);
//ES6 ASIDE: LET & CONST
var appRoot = document.getElementById('app');
//renders template
ReactDOM.render(challengeThree, appRoot);