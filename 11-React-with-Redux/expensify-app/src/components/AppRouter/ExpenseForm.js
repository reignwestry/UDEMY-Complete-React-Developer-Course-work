import React from 'react';
import moment from 'moment';

//const date = new Date();
const now = moment();   // current point in time
console.log( now.format( "MMM Do, YYYY" ) );   // formats & logs moment to the console

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

/*  //# note
    # momentjs.com === time library
    # airbnb/react-dates === calendar picker library
*/
//! CHALLENGE ADD FUNCTIONALITY FOR TEXTAREA
//! setup note state
//! setup onChange and value for textarea
class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: props.expense ? props.expense.error : ''
        };
    };

    //# HANDLERS =====================================>
    onDescriptionChange = (e) => {
        const description = e.target.value;
        //BINDS the input to this 
        this.setState( () => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        //# " /^\d*(\{0,2})?$/ " === REGULAR EXPRESSION
        if (!amount || amount.match(/^\d{1,}(\{0,2})?$/) ) {
            this.setState( () => ({ amount })); 
        } 
        
    };
    onNoteChange = (e) => {
        const note = e.target.value; //# target MUST be saved to a variable
        this.setState( () => ({ note }));
        //e.persist();  //# alternate - if you can not change 
        //this.setState( () => ({ note: e.target.value }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState( () => ({ createdAt }) );
        } 
    };
    onFocusChange = ({focused}) => {
        this.setState( () => ({ calendarFocused: focused }) );
    };
    onSubmit = (e) => {
        e.preventDefault();

        // CHECKS if there is no description or amount
        if(!this.state.description || !this.state.amount){
            // Set error state equal to 'Please provide description and amount
            this.setState(() => ({ error: 'Please provide description and amount'}));
        } else {
            //Clear the error
            this.setState(() => ({ error: ''}));
            //console.log('submtted!'); //# RUNS TO CHECK IF IT WORKS
            //# CALLS onSubmit with data
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}> 
                    <input type="text" 
                        placeholder="Description"
                        autoFocus
                        value={this.state.description} // Saves input value to description
                        onChange={this.onDescriptionChange} // Changes input value onChange
                        />
                    <input type="text"
                        placeholder="Amount"
                        value={ this.state.amount }
                        onChange={ this.onAmountChange }
                        />
                    <SingleDatePicker 
                        date={ this.state.createdAt} // DEFAULT passes moment() 
                        onDateChange={this.onDateChange}
                        focused={ this.state.calendarFocused }
                        onFocusChange={ this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ (day) => false} //allows for past and future dates
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;