import React from 'react';
//! CHALLENGE ADD FUNCTIONALITY FOR TEXTAREA
//! setup note state
//! setup onChange and value for textarea
class ExpenseForm extends React.Component {
    state = {
        description: '',
        textareaNote: ''
    }
    //# HANDLERS =====================================>
    onDescriptionChange = (e) => {
        const description = e.target.value;
        //BINDS the input to this 
        this.setState( () => ({ description }));
    };
    onTextareaChange = (e) => {
        const textareaNote = e.target.value; //# target MUST be saved to a variable
        this.setState( () => ({ textareaNote }));
        //e.persist();  //# alternate - if you can not change 
        //this.setState( () => ({ note: e.target.value }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if ( ) {
            this.setState( () => ({ amount })); 
        }
        
    };

    render() {
        return (
            <div>
                ExpenseForm
                <form>
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
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.textareaNote}
                        onChange={this.onTextareaChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;