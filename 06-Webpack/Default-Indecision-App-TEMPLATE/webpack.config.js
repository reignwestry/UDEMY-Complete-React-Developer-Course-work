//entry-> output
const path = require('path');
//note __dirname == gives the absolute path to the current directory

//note path.join === joins all arguments together and normalizes the resulting path
    //note path.join('foo', 'bar', 'baz/asdf', 'quuz', '..');
    //note RETURNS '/foo/bar/baz/asdf'

console.log( path.join(__dirname, 'public') );
console.log(__dirname);

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    /*loader - lets you costumize the behavior of webpack when you load a given file
        Install babel-core and babel-loader for webpack inclusion

        //loader
        SETUP the WEBPACK module
            - RULES can be separated into three parts = Conditions, Results and nested Rules
    */
   module: {
       rules:  [{

           // use babel-loader
           loader: 'babel-loader',

           //regular expression
           // "\.js$" = any files that end with .js run it through babel-loader
           test: /\.js$/,

            //exclude = any files from the process
           exclude: /node_modules/
       }]

       /*
            NEXT tell Babel to use the react and env presets.
            1. create a separate babel configuration file in the root ".babelrc"
            2. TELL BABEL TO RUN EVERYTHING THROUGH THE PRESETS
       */

   }
};
