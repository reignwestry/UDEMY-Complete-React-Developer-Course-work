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
var userName = 'Reign Westry';
var userAge = 35;
var templateTwo = (
<div>
    <h1> {userName.touppercase()}</h1>
    <p> Age: {userAge}</p>
    <p> Location: {userLocation}  </p>
</div>

);




var appRoot = document.getElementById('app');
//renders template
ReactDOM.render(templateTwo, appRoot);