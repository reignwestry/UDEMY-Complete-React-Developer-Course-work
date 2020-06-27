import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense} from '../../actions/expenses';

const AddExpensePage = (props) => (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm 
        onSubmit={ (expense) => {
          //console.log(expense); //TESTS COMPONENT
          props.dispatch(addExpense(expense));
          {/* //# REDIRECTS TO DASHBOARD PAGE */}
          props.history.push('/');

        }}
      />
    </div>
  );
export default connect()(AddExpensePage);