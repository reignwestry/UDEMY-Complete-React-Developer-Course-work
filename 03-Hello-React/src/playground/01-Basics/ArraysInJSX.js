console.log('ArraysInJSX.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [ "Item One", "Item Two", "Item Three"]
};

const onFormSubmit = (e) => {
    e.preventDefault(); // stops full page refresh and only refreshes the form

    console.log("Form Submitted");

    //e. target = points to the element that the event started on
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        //clear typed input
        e.target.elements.option.value = '';
        renderOptions();// re-renders data after submit
    }
};

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
            {/* note  JSX arrays */}
            {
                /*[99, 98, 97, 'Mike Smith', null, undefined, true]
            }
            {
                [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]*/
            }
            <p>{app.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
                <li>Item Three</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
};

//Array
//const numbers = [55, 101, 1000];

const render = () => {
    const arraysInJSX = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeOptions}>Remove All</button>
            {
                // note pulls from the numbers array
                /* note
                    numbers.map((number) => {
                        return <p key={number}>Number: {number}</p>
                    })
                 */


            }
            {/** namp over app.options getting back an array of list (set key and text) */}
            <ol>
                { //lists options
                                    //note shorthand version
                 //app.options.map((option) => <li key={option}>{option}</li>)

                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    //renders template

    ReactDOM.render(arraysInJSX, appRoot);
};
render();
