
//note NESTED COMPONENT
class IndecisionApp extends React.Component {
    render() {
        return(
            <div>
                <Header title={title}/>
                <Action />
                <Option />
                <AddOptions />
            </div>
        );
    }
}

//React Component
class Header extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What should I do?</button>
            </div>
        );
    }
}

//note Challenge
    //note create options class -> Options component here
    //note  AddOption -> AddOption Component here

class Options extends React.Component {
    render() {
        return(
            <div>
                <p>Options Component Here</p>
                <ol>
                    <Option />
                </ol>


            </div>
        );
    }
}
// note Challenge
    //note create Component in Options -> Option

class Option extends React.Component {
    render() {
        return(
            <div>
                <li>Option Component Here</li>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return(
            <div>
                <p>AddOptions Component Here</p>
            </div>
        );
    }
}



ReactDOM.render( <IndecisionApp /> , document.getElementById('app'));