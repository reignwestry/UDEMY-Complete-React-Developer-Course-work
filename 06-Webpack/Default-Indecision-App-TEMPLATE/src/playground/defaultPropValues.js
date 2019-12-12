//*note SECTION 05 = Default Prop Values
/*  note
       Props & States can have default values
 */
console.log('Section 05 = Default Prop Values')

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
            options: props.options //calls default props
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
//note DEFAULT Props Object for Options Array
IndecisionApp.defaultProps = {
        options:  []
}

const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            {/* note if title exists show subtitle*/}
            { props.subtitle && <h2>{ props.subtitle }</h2>}
        </div>
    );
};

//note DEFAULT PROP
Header.defaultProps = {
    title: 'Some default!'
}

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
};

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
                                          // default Options passed in to IndecisionApp class
ReactDOM.render(<IndecisionApp options={['Devils Den', 'Second District']} />, document.getElementById('app'));