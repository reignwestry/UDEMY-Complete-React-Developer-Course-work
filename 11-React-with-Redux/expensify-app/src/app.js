import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';

//# REDUX IMPORTS
import configureStore from './store/configureStore'; // import configureStore

//# 3) REDUX ACTIONS IMPORTS
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';

//# 


//# STYLES
import 'normalize.css/normalize.css';
import './styles/styles.scss';



//# 1) call store
const store = configureStore();

//# 2) console.log store states
console.log( store.getState() );

//! CHALLENGE
//# 3) ADD & TEST ACTIONS & SELECTOR  through app.js console
//* addExpense -> Description Water Bill
//* addExpense -> Description Gas Bill
//* setTextFilter -> bill (should see 2 items convert to Water) 
//* getVisibleExpenses -> print visibles ones to screen

    //INPUT data to store & CALL store (actionGenerator(value))
  //   const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
  //   const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

  //   const demoState = {
  //     //# PROPERTIES (ARRAY)
  //     expenses: [{
  //         //# OBJECTS
  //         id: 'aspdofij',
  //         description: 'January Rent',
  //         note: 'This was the final payment for that address',
  //         amount: 545000, //pennies
  //         createdAt: 0,
 
  //     }],
  //     //filters
  //     filters:{
  //         text: 'rent',
  //         sortBy: 'amount', //date or amount
  //         startDate: undefined,
  //         endDate: undefined
  //     }
  // };



 store.subscribe(() => {
  const state = store.getState(); 
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  //console.log(store.getState()); // GETS the entire state
});


//# A) RUN STORE DISPATCH CALLS ( store.dispatch() )
  
  store.dispatch( addExpense({ description: 'Water Bill' }));

    //store.dispatch(setTextFilter('rent'));
    //store.dispatch(setTextFilter('FFE'));
    // store.dispatch(setTextFilter());

    //SORT_BY_DATE
    // store.dispatch(sortByDate());
    // SORT_BY_AMOUNT
    //store.dispatch(sortByAmount()); // no need for a value
    
    // SET_START_DATE
    //  store.dispatch(setStartDate(125));  //startDate 125
    // store.dispatch(setStartDate());     // start undefined
  
    // SET_END_DATE
    //store.dispatch(setEndDate(1250));   // endDate 1250




const App = () => (
  <div>
    <AppRouter />


  </div>
);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
