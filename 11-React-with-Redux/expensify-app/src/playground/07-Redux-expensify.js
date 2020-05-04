 console.log('07-REDUX-EXPENSIFY'); 
 console.log('//==============//'); 
 
 // combineReducers === Allows you to create multiple functions that define how REDUX changes
 import {createStore, combineReducers} from 'redux';

//todo ACTIONS TO CREATE
    // ADD_EXPENSE
    // REMOVE_EXPENSE
    // EDIT_EXPENSE
    // SET_TEXT_FILTER
    // SORT_BY_DATE
    // SORT_BY_AMOUNT
    // SET_START_DATE
    // SET_END_DATE

    //expenses Reducer Default State
    const expensesReducerDefaultState = [];

    //EXPENSES REDUCER
    const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return{

            };
            case 'REMOVE_EXPENSE':
                return{

            };
            case 'EDIT_EXPENSE':
                return{

            };
            case 'ADD_EXPENSE':
                return{

            };

            default:
                return state;
        }
    };

    //Filters Reducer
    //! CHALLENGE =====================
    //! set text => ' ' === set text to an empty string
    //! sortBy => 'date' === set sortBy to date
    //! startDate => undefined 
    //! endDate => undefined 

    const filtersReducerDefaultState = {
        text: ' ',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const FiltersReducer = ( state = filtersReducerDefaultState, action ) => {
        switch (action.type) {
            
            case 'TEXT': 
                return {
                    text: ' '
                }
            case 'SORTBY':
                return {
                    sortBy: date
                }
            case 'STARTDATE':
                return {
                    date: undefined
                }
            case 'ENDATE':
                return {
                    date: undefined
                }

            default: 
                return state;
        }
    }

    // Store creation
    const store = createStore(
        //REDUCERS to combine
        combineReducers({
            // expenses to be managed by expensesReducer
            expenses: expensesReducer,
            filters: FiltersReducer
        })
        
    );

    console.log(store.getState()); // logs all states to the console
    
 const demoState = {
     //PROPERTIES (ARRAY)
     expenses: [{
         //OBJECTS
         id: 'aspdofij',
         description: '',
         note: 'This was the final payment for that address',
         amount: 545000, //pennies
         createdAt: 0,

     }],
     //filters
     filters:{
         text: 'rent',
         sortBy: 'amount', //date or amount
         startDate: undefined,
         endDate: undefined
     }
 };