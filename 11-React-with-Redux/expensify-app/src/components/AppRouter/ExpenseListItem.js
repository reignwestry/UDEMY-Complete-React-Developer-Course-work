import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../../actions/expenses';

//! CHALLENGE
//! CREATE a Export a stateless functional component that renders the description, amount, createdAt


//# Stateless functional component
const ExpenseListItem = ( { dispatch, id, description, amount, createdAt} ) => (
     <div>
        <h3>{description}</h3>
        <p> {amount} - {createdAt} </p>
        {/* //! CHALLENGE TWO - removeExpense Btn */}
        <button onClick={ () => {
           dispatch(removeExpense({ id }));
        } }>Remove</button>
     
     </div>
);

//! CHALLENGE TWO - CREATE A REMOVE AN EXPENSE BUTTON
//! 1) DISPATCH an action on click
//!   A) IMPORT THE CORRECT ACTION GENERATOR (removeExpense) onClick
//!   B) Connect to the store to dispatch the action 
//!   C) Wire up the button to work correctly

export default connect ()(ExpenseListItem) ;