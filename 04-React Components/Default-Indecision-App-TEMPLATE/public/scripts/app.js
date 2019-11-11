

const title = "Indecision App";
const subtitle = 'Put your life in the hands of a computer';
//ES6 Array
const options = ['Thing One', 'Thing Two', 'Thing Three'];

class IndecisionApp extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, { title: title, subtitle: subtitle }),
      React.createElement(Action, null),
      React.createElement(Options, { options: options }),
      React.createElement(AddOption, null)
    );
  }
}

class Header extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        this.props.title
      ),
      React.createElement(
        'h2',
        null,
        this.props.subtitle
      )
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handlePick },
        'What should I do?'
      )
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handleRemoveAll },
        'Remove All'
      ),
      React.createElement(
        'ol',
        null,
        this.props.options.length,
        this.props.options.map(option => React.createElement(Option, { key: option, optionText: option })),
        React.createElement(Option, null)
      )
    );
  }
}

class Option extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      this.props.optionText
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { onSubmit: this.handleAddOption },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          null,
          'Add Option'
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
