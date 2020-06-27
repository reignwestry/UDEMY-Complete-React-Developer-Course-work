
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';

//# REDUX IMPORTS

import configureStore from './store/configureStore'; // import configureStore

//# 3) REDUX ACTIONS IMPORTS
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';

//# 


//# STYLES
import 'normalize.css/normalize.css';
import './styles/styles.scss';



//# 1) call store
const store = configureStore();

//# 3) RUN STORE DISPATCH CALLS ( store.dispatch() )


//! CHALLENGE DISPATCH CALLS =========================================
//* ADD & TEST ACTIONS & SELECTOR  through browser console
console.log('++++++++++++++');
console.log('DISPATCH CALLS');
console.log('++++++++++++++');

//! addExpense -> Description Water Bill
store.dispatch( addExpense({ description: 'Water Bill' }));

//! addExpense -> Description Gas Bill
store.dispatch( addExpense({ description: 'Gas Bill' }));

//! setTextFilter -> bill (should see 2 items convert to Water) 
store.dispatch( setTextFilter('Water') ); // Sorts all of the water and logs them

//! getVisibleExpenses -> print visibles ones to screen
const state = store.getState();   // GETS current state
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);  // GRABS current state expenses and filters
console.log(visibleExpenses); //LOGS the current states expenses and filters




//# 2) console.log store states
console.log( store.getState() );

ReactDOM.render(<AppRouter />, document.getElementById('app'));
