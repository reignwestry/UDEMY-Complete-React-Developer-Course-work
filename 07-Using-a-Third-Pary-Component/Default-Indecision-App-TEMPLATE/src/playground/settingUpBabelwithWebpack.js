/* IMPORTING NPM */
console.log('Section: 06 Webpack - Importing NPM modules')
console.log('===========================================')


//install -> import -> use
//import validator from 'validator';

//console.log(validator.isEmail('test'));

/*
    INSTALL MULTIPLE NPM MODULES
    npm install react@16.0.0 react-dom@16.0.0
            or
    yarn add react @16.0.0 react - dom @16.0.0
*/

import React from 'react';
import ReactDOM from 'react-dom';
//BABEL is not compiling

const template = <p> THIS IS JSX from WEBPACK - .babelrc </p>;
ReactDOM.render(template, document.getElementById('app'));