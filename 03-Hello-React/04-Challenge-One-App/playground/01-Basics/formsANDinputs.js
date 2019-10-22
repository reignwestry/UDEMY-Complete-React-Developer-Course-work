console.log('formsANDinputs.js is running!');

// note check out synthetic Events = https://facebook.github.io/react/docs/events.html

// note FORM EVENTS
    //onChange
    //onInput
    //onSubmit === run a function when the user submits a form

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // stops full page refresh and only refreshes the form

    console.log("Form Submitted");

    //e. target = points to the element that the event started on
    const option = e.target.elements.option.value;

    //check if a value is typed in
    if (option) {
        app.options.push(option);
        //clear typed input
        e.target.elements.option.value = '';
        renderOptions();// re-renders data after submit
    }
};

//remove options function
const removeOptions = () => {
    app.options = []; //clears app.option values
    renderOptions();
}
const renderOptions = () =>{
    const templateDefault = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button onClick={removeOptions}>Remove All</button>
            <p>{app.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    const appRoot = document.getElementById('app');
    //renders template

ReactDOM.render(templateDefault, appRoot);
};

//Challenge One
    // Create render function that renders the new jsx
    // Call it right away
    renderOptions(); //initially renders app
    // Call it after options array added to

//Challenge Two
    //create "Remove All" button above list
        //onClick -> wipe the array -> rerender