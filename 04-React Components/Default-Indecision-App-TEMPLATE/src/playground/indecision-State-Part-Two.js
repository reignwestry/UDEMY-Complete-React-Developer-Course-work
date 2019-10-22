//Indecision State Part Two
console.log('Indecision State Part Two')

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props)
      //# Bind
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      //# default state
      this.state = {
        title: "Indecision App",
        subtitle: 'Put your life in the hands of a computer',
        options: [] //empty array
      }
    }

    handleDeleteOptions(){
        this.setState( () =>{
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randOption = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randOption]
        alert(option)

    }
    handleAddOption(option){

      //note VALIDATION
      //? if option is empty string
      if(!option) {
        return 'Enter valid value to add item'

      //? if the option already exists in the array
      } else if ( this.state.options.indexOf( option ) > -1) {
        return 'This option already exists'
      }

      //# updater function
      this.setState( (prevState) => {
        return {
          //note .concat() = merges two or more arrays without changing the original arrays
          //note .concat SYNTAX = var array3 = array1.concat( array2)

          //options: prevState.options.concat([option])//? adds array value

          options: prevState.options.concat(option)//? adds array

        }
      })
    }

    render() {
      return (
        <div>
          <Header title={ this.state.title } subtitle={ this.state.subtitle } />
          <Action
            handlePick={ this.handlePick }
            hasOptions={ this.state.options.length > 0 }
          />
          <Options
            options={ this.state.options }
            handleDeleteOptions={ this.handleDeleteOptions }
          />
          <AddOption
            handleAddOption={ this.handleAddOption }
          />
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
              {/*  */}
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
    constructor(props){
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      //component state
      this.state = {
        error: undefined
      }
    }

      handleAddOption(e) {
          e.preventDefault(); //note prevent full page refresh
          const option = e.target.elements.option.value.trim() //# gets & trims input
          const error = this.props.handleAddOption(option)

          //# update the state when submitted
          this.setState( () => {
            return {
              error //error: error = value set the same as the name
            }
          })
      }

    render() {
      return (
        <div>
          { this.state.error && <p> {this.state.error} </p>}
          <form onSubmit={ this.handleAddOption }>
              <input type='text' name='option' />
              <button >Add Option</button>
          </form>
        </div>
      );
    }
  }


  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));