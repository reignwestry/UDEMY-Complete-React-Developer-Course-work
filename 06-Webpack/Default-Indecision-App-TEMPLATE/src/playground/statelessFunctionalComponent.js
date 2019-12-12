//*note SECTION 05 = STATELESS FUNCTIONAL COMPONENT
console.log('Section 05 = Stateless Functional Component')

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

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{ this.props.title }</h1>
//                 <h2>{ this.props.subtitle }</h2>
//             </div>
//         );
//     }
// }

/*todo Convert to Stateless Functional Component
    1. convert class to const
    2. remove render(){}
    3. include props
    4. remove `this` keyword from props
 */
//* converted
const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            <h2>{ props.subtitle }</h2>
        </div>
    );
};


// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={ this.props.handlePick }
//                     disabled={!this.props.hasOptions}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }
//* Converted function
const Action = (props) => {
    return (
        <div>
            <button
                onClick={ props.handlePick }
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};


// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={ this.props.handleDeleteOptions }>Remove All</button>
//                 <ol>
//                     {/*  */}
//                     { this.props.options.length }
//                     { this.props.options.map((option) => <Option key={option} optionText={option} />)}
//                     <Option />
//                 </ol>
//             </div>
//         );
//     }
// }

//* converted
const Options = (props) => {
    return (
        <div>
            <button
                onClick={ props.handleDeleteOptions }>Remove All</button>
            <ol>

                { props.options.length }
                { props.options.map((option) => <Option key={option} optionText={option} />)}
                <Option />
            </ol>
        </div>
    );
}


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 { this.props.optionText }
//             </div>
//         );
//     }
// }

//* Converted
const Option = (props) => {
    return (
       <div>
         { props.optionText }
       </div>
    );
};


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



//note STATELESS Functional Component
/* note
    ! Faster than class based components
    ! do not use the 'this' keyword
    ! easier to read, write, & test
    ! class based components SHOULD BE converted to CLASSES
    ! ONLY render only components should be converted to Stateless Functional Components
 */
// const User = (props) => {
//   return(
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//     </div>
//   );
// };

//<User name="Reign" age={36} /> //! passes props to component

//todo CHALLENGE
/*
    todo
        Convert all simple components to Stateless Functional Components (Header, Action, Option, Options)
         
 */

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));