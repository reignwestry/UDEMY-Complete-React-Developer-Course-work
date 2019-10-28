//*note SECTION 05 = STATELESS FUNCTIONAL COMPONENT
console.log('Section 05 = Stateless Functional Component')

class IndecisionApp extends React.Component {
    constructor(props) {
         super(props)
        //# Bind
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
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
        // this.setState( () => {
        //     return {
        //         options: []
        //     }
        // })
        //* simplified
        //sets options state to an empty array
        this.setState( () => ({
            options:[]
        }))
    }


    //note ability to remove a single option
    handleDeleteOption(option) {(
        //console.log('hdo', option);
        this.setState( (prevState) => {
           options: prevState.options
        }))
    }

    handlePick() {
        const randOption = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randOption]
        alert(option)

    }
    handleAddOption(option){

        if(!option) {
            return 'Enter valid value to add item'

            //? if the option already exists in the array
        } else if ( this.state.options.indexOf( option ) > -1) {
            return 'This option already exists'
        }

        //# updater function
        this.setState( (prevState) => ({
                options: prevState.options.concat(option)//? adds array
        }));
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
                    hanldeDeletOption={ this.handleDeleteOption }
                />
                <AddOption
                    handleAddOption={ this.handleAddOption }
                />
            </div>
        )
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            <h2>{ props.subtitle }</h2>
        </div>
    );
};
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
                { props.options.map((option) =>(
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={ props.handleDeleteOption }
                    />
                ))}
                <Option />
            </ol>
        </div>
    );
}
const Option = (props) => {
    return (
        <div>
            { props.optionText }
            <button 
                onClick={
                    /*note inline Arrow function */
                    (e) => {
                    props.handleDeleteOption( props.optionText )
                }}
            > remove </button>
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

        //note Arrow function shorthand
        //# update the state when submitted
        this.setState( () => ({ error }))

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