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
var userName = 'Reign Westry';
var age = 35;
var location = 'Atlanta';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        userName.touppercase()
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        React.createElement(
            'span',
            null,
            age
        ),
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        React.createElement(
            'span',
            null,
            location
        ),
        ' '
    )
);

var appRoot = document.getElementById('app');
//renders template
ReactDOM.render(templateTwo, appRoot);
