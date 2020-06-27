console.log('========================');
console.log('04-Filtering-By-Dates.js');
console.log('========================');

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore'; // import configureStore
import { addExpense } from './actions/expenses';
//import { setTextFilter, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

store.dispatch( addExpense({ description: 'Water Bill', amount: 4500 }) );
store.dispatch( addExpense({ description: 'Gas Bill', createdAt: 1000 }) );
store.dispatch( addExpense({ description: 'Rent', amount: 109500 }) );

//# setTextFilter Call = Sorts all of the water and logs them
// store.dispatch( setTextFilter('water') ); 
// setTimeout( () => {
//     store.dispatch(setTextFilter('bill'));
    
// }, 3000)  

const state = store.getState();   // GETS current state
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);  // GRABS current state expenses and filters
console.log(visibleExpenses); //LOGS the current states expenses and filters

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
