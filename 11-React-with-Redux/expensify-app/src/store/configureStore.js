//# STORE CONFIGURATION

import {createStore, combineReducers } from 'redux';

//REDUCER IMPORTS

//* RENAMES the import upon import
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';




export default () => {
    
    // Store creation
    const store = createStore(
        //REDUCERS to combine
        combineReducers({
            // expenses to be managed by expensesReducer
            expenses: expensesReducer,
            filters: filtersReducer
        })
        
    );

    return store;
};

