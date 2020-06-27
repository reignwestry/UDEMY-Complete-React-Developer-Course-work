import React from 'react';
import { connect } from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expenses';

//# REGULAR COMPONENT
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {/* //! ( ExpenseListItem CHALLENGE ) grabs props from ExpenseListItem */}
        { props.expenses.map( (expense) => {
            return <ExpenseListItem key={ expense.id } { ...expense }/>;
        })}
    </div>
);

//# CONNECTED FUNCTION
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)

    };
}

//# PULLS EVERYTHING TOGETHER
export default connect( mapStateToProps )( ExpenseList );
