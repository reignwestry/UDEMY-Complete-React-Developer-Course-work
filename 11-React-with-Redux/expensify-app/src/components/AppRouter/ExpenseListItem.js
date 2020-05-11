import React from 'react';

//! CHALLENGE
//! Export a stateless functional component that renders the description, amount, createdAt

//# Stateless functional component
const ExpenseListItem = ( { description, amount, createdAt} ) => (
     <div>
        <h3>{description}</h3>
        <p> {amount} - {createdAt} </p>
     </div>
);

export default ExpenseListItem ;