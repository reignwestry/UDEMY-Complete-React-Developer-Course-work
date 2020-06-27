console.log('=====================================================');
console.log('02-Connecting-Store-and-Component-with-React-Redux.js');
console.log('=====================================================');

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';

//# REDUX IMPORTS
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'; // import configureStore

//# REDUX ACTIONS IMPORTS
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';

//# STYLES
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

//# STORE DISPATCH CALLS ( store.dispatch() )
store.dispatch( addExpense({ description: 'Water Bill' }));
store.dispatch( addExpense({ description: 'Gas Bill' }));
store.dispatch( setTextFilter('Water') ); // Sorts all of the water and logs them

//# setTimeout Function
setTimeout( () => {
    store.dispatch(setTextFilter('water'));
    store.dispatch(setTextFilter('gas'));
    store.dispatch(setTextFilter('rent'));
    
}, 3000)  

const state = store.getState();   // GETS current state
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);  // GRABS current state expenses and filters
console.log(visibleExpenses); //LOGS the current states expenses and filters


//# PROVIDER
const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
