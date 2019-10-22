console.log('manualDataBinding.js is running!');
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
//note check out more dom-elements at:
// note https://facebook.github.io/react/docs/dom-elements.html
let count = 0;

const addOne = () => {

    count = count + 1;
    console.log('addOne', count);
        renderCounterApp();
};

const minusOne = () => {
    // subtratct 1 from count - rerender
    count = count - 1;
    console.log('minusOne',count);
    renderCounterApp();
};

const reset = () => {
    count = 0;
    console.log("reset", count);
        renderCounterApp();
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    const appRoot = document.getElementById('app');
    //renders template

    ReactDOM.render(templateTwo, appRoot);
};

// Challenge
// Make Buttone '-1' - setup minusOne Function and register - log 'minusOne'
// Make a reset button 'reset' - setup reset function -log 'reset'

//init
renderCounterApp();