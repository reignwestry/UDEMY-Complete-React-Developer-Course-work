//Indecision State Part One
console.log('Indecision State Part One')

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props)
      //# Bind
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      //# default state
      this.state = {
        title: "Indecision App",
        subtitle: 'Put your life in the hands of a computer',
        options: ['Thing One', 'Thing Two', 'Thing Three' ]
      }
    }

    handleDeleteOptions(){
        this.setState( () =>{
            return {
                options: []
            }
        })
    }

    //! CHALLENGE
    //! Create method handlePick - pass down to action and setup onClick- bind
    //! randomly pick option and alert it
    handlePick() {
        //gets length & picks random number
        const randOption = Math.floor(Math.random() * this.state.options.length)
        //grabs & combines options with random Number
        const option = this.state.options[randOption]
        alert(option)

    }

    render() {
      return (
        <div>
          <Header title={ this.state.title } subtitle={ this.state.subtitle } />
          {/* passes handlePick  */}
          {/* Checks if the length is greater than zero */}
          <Action
            handlePick={ this.handlePick }
            hasOptions={ this.state.options.length > 0 }
          />
          <Options
            options={ this.state.options }
            /* trigger changes parent prop values */
            handleDeleteOptions={ this.handleDeleteOptions }
          />
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

  class Action extends React.Component {
    render() {
      return (
        <div>
          {/* Check if hasOptions is true or false */}
          <button
            onClick={ this.props.handlePick }
            disabled={!this.props.hasOptions}>
            What should I do?
          </button>
        </div>
      );
    }
  }

  class Options extends React.Component {


    render() {
      return (
        <div>
          <button
            onClick={ this.props.handleDeleteOptions }>Remove All</button>
          <ol>
              { this.props.options.length }
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

  class AddOption extends React.Component {
      handleAddOption(e) {
          e.preventDefault(); //note prevent full page refresh

          const option = e.target.elements.option.value.trim();
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
