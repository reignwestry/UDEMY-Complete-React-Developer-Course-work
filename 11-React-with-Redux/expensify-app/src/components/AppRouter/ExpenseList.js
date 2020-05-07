import React from 'react';
import { connect } from 'react-redux'; 

//# REGULAR COMPONENT
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.filters.text }
        { props.expenses.length }
    </div>
);

//# CONNECTED FUNCTION
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters

    };
}

//# PULLS EVERYTHING TOGETHER
export default connect( mapStateToProps )( ExpenseList );
