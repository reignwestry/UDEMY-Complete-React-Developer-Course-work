/**
 *  ? React Component State //!ALTERNATIVE setState SYNTAX
 *    ? STEP 1 = Setup default state object
 *    ? STEP 2 = Component rendered with default state values
 *    ? STEP 3 = Change state based on event
 *    ? STEP 4 = Component re-rendered using new state values
 *    ? STEP 5 = Start again at 3
 */


class Counter extends React.Component {
  constructor(props){
    super(props)
    //# binds all handle... methods to this keyword in the component
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    //? STEP 1 = Setup default state object
    this.state = {
      count: 0,
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

  //! CHALLENGE ONE
  //! WIRE UP handleMinusOne === create functionality for function
  handleMinusOne() {
    console.log('handleMinusOne')
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1 //? gets prevState and decrements by 1
      }
    })
    console.log(this.state);
  }

  handleReset() {
    console.log('handleReset')
    //? Don't need to previous state // only to return the object
    //? UPDATER FUNCTION ( () => { ... })

    //? PREFERED & LATEST WAY
    this.setState( () => {
      return {
        count: 0
      }
    })
    //? pulls the previous State & then adds One
    this.setState( (prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    // //! ALTERNATIVE - WRONG WAY
    // this.setState( {
    //   count: 0
    // })
    // this.setState({
    //   count: this.state.count + 1 //! still getting the old value because they are asynchronous
    // })

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
//!! CHALLENGE ONE
//!! CREATE threee methods: handleAddOne, handleMinusOne, handleReset
//!! Use console.log() to print method name
//!! Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'));




// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
