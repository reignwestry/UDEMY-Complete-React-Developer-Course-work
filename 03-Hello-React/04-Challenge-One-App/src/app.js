console.log('App.js is running!');

//JSX - Javascript XML
var template =(
    <div>
        <h1>Indecision app</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>);

//Challenge One #all data is static
var templateTwo = (
    <div>
        <h1>Reign Westry</h1>
        <p>Age: 35</p>
        <p>Location: Atlanta</p>
    </div>

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