import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

import { editExpense, removeExpense } from '../../actions/expenses';
//console.log(props) == shows all of the props you can use in the browser console

// {props.match.params.id} == shows the value of props>match>params>id

//! CHALLENGE ADD Links to items
//! MOVE REMOVE BUTTON TO THIS PAGE
const EditExpensePage = (props) => {
    //console.log(props);
    return(
        <div>
            <ExpenseForm
                expense={props.expense}
                 onSubmit={ (expense) => {
                     //! Dispatch the action to edit the expense &
                        props.dispatch(editExpense(props.expense.id, expense));
                     //! redirect to the dashboard
                        props.history.push('/');
                     console.log('UPDATED');
                 }}
            />
            <button onClick={ () => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                //# Redirect
                props.history.push('/');
             } }>Remove</button>
        </div>
    );
};
//# .find allows to search through an array item
const mapStateToProps = (state, props) => {
    return {
        // expense: state.expenses.find( () => {
        //     return expense.id === props.match.params.id;
        // })
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpensePage);