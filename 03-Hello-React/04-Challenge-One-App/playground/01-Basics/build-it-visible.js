console.log("Build It Visible");

let visibility = false;

const toggleDetails = () => {
    visibility = !visibility; // flips the value from true to false
    render();
};

const appRoot = document.getElementById('app');
const render = () => {
    const layout = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>
            {visibility ? 'Hide details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(layout, appRoot);
}
render();