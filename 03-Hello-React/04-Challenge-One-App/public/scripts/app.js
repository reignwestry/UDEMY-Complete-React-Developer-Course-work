'use strict';

console.log('App.js is running!');

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision app'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

//Challenge One #all data is static
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Reign Westry'
    ),
    React.createElement(
        'p',
        null,
        'Age: 35'
    ),
    React.createElement(
        'p',
        null,
        'Location: Atlanta'
    )
);

//Create a templateTwo var JSX expression
//div
//  h1 -> Reign Westry
//  p -> Age: 35
//  p -> Location: Atlanta
//Render templateTwo instead of template


var appRoot = document.getElementById('app');
//renders template
ReactDOM.render(templateTwo, appRoot);
