/*
  ? CHALLENGE
   count -setup default prop value to 0
  
 */


class Counter extends React.Component {
  constructor(props){
    super(props)
    //# binds all handle... methods to this keyword in the component
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count, //! note calls default prop
      name: 'Julie'
    };
  }

  //methods
  handleAddOne() {
    console.log('handleAddOne')
    // .setState = changes the state
    // prevState = (previous State) state object before changes are applied = '0'
    this.setState( (prevState) => {
      //defines updates you want to make
      return {
        //# just changes the specific value -- NOT OVERRIDING THE WHOLE STATE
        //count: 1 //? sets state to 1
        count: prevState.count + 1 //? gets prevState and increments by 1

      }

    });
    console.log(this.state);
  }


  handleMinusOne() {
    console.log('handleMinusOne')
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1
      }
    })
    console.log(this.state);
  }

  handleReset() {
    console.log('handleReset')
    this.setState( () => {
      return {
        count: 0
      }
    })
    console.log(this.state); // logs state after change
  }

  render() {
    return(
      <div>
        <h1>Count: { this.state.count } </h1>
        <button onClick={ this.handleAddOne }>+1</button>
        <button onClick={ this.handleMinusOne }>-1</button>
        <button onClick={ this.handleReset }>reset</button>
      </div>
    )
  }
}

//! 1. Set Count default prop
Counter.defaultProps = {
  count: 0
}
ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));
