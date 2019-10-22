console.log('App.js is running!');
const templateDefault =(
    <div>
        <h1>Indecision app</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);
// note ATTRIBUTES in JSX
    //note  class === classNAME
    //note  CAN reference name of variables addOne

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>

        {/* REFERENCE A VARIABLE as attribute */}
            <button onClick={addOne}>+1</button>

        {/* RUN A FUNCTION as a attribute */}
            <button onClick={ () => {
                console.log('some value here')
            }}>Some Value</button>

        {/* minusOne Button */}
            <button onClick={minusOne}>-1</button>

        {/* RESET Button */}
            <button onClick={ () => {
                console.log('reset');
            }}>RESET</button>

    </div>
);

// Challenge
// Make Buttone '-1' - setup minusOne Function and register - log 'minusOne'
// Make a reset button 'reset' - setup reset function -log 'reset'

//note check out more dom-elements at:
    // note https://facebook.github.io/react/docs/dom-elements.html







const appRoot = document.getElementById('app');
 //renders template
ReactDOM.render(templateTwo, appRoot);
