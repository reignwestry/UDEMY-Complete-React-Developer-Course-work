




const title = "Indecision App" ;
const subtitle= 'Put your life in the hands of a computer'
//ES6 Array
const options = [ 'Thing One', 'Thing Two', 'Thing Three'];



class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        {/* REFERENCE THE VARIABLES */}
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    );
  }
}

//Self-Containing Method
class Action extends React.Component {
    //fires when someone clicks that button
    //note CLASS METHOD
    handlePick() {
        alert('handlePick');
    }
  render() {
    return (
      <div>
      {/* REFERENCE THE FUNCTION !! do not call it with parenthesis  */}
        <button onClick={ this.handlePick }>What should I do?</button>
      </div>
    );
  }
}

//! CHALLENGE
// Add Remove All button
// Setup handleRemoveAll -> alert some message
// Setup onClick to fire the method
class Options extends React.Component {
    //calls Binds handleRemoveAll function-wide to this
    constructor(props) {
        super(props);
        //? binds all handleRemoveAll to this keyword in the class
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    //note CLASS METHOD
    handleRemoveAll() {
        console.log(this.props.options);
        //alert('Remove All clicked');
    }
  render() {
    return (
      <div>
        <button onClick={ this.handleRemoveAll }>Remove All</button>
        <ol>
            { this.props.options.length }
            {/* USES map to renders each option out of the array  & set text, key */}
            {/* this.props.options.map((option) => <p key={option}>{option}</p>)*/}

            {/* Renders a instance of option for each value in the array */}
            { this.props.options.map((option) => <Option key={option} optionText={option} />)}
            <Option />
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        { this.props.optionText }
      </div>
    );
  }
}

//!!ChallengeTwo
// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. hanldeAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
    //note CLASS METHOD === something that is contained inside of the class
    handleAddOption(e) {
        e.preventDefault(); //note prevent full page refresh

        //note Fetch & SAVE input submitted value
        //note trim() removes spaces before & after the typed value;
        const option = e.target.elements.option.value.trim();

        //note if there is a option do this...
        if (option) {
            alert(option);
        }


    }
  render() {
    return (
      <div>
        <form onSubmit={ this.handleAddOption }>
            <input type='text' name='option' />
            <button >Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
