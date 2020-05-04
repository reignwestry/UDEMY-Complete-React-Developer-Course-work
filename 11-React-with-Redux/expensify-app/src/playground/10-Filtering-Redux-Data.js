 console.log('10-Filtering REDUX Data'); 
 console.log('//==============//'); 
 
/*
todo
 = Create a single function that sorts and filters data
*/

//* IMPORTS
 import {createStore, combineReducers} from 'redux';
 import uuid from 'uuid'; // to generate unique identifiers

//* ACTIONS ==================================
    // ADD_EXPENSE
    const addExpense = (
        { 
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = {}
     ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt

        }
    });
    // REMOVE_EXPENSE
    const removeExpense = (
        { id } = {}
    ) => ({
        type: 'REMOVE_EXPENSE',
        id: id

    });

    // EDIT_EXPENSE
    const editExpense = ( id, updates ) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });

    //! CHALLENGE === COMPLETE SET_TEXT_FILTER
    // SET_TEXT_FILTER
    const setTextFilter = ( text = '' ) => ({
        type: 'SET_TEXT_FILTER',
        text
    });

    //* ACTIONS TO CREATE
    //*==========================
    // SORT_BY_DATE
    const sortByDate = ( date = undefined ) => ({
        type: 'SORT_BY_DATE', 
        date
    });
    // SORT_BY_AMOUNT
    const sortByAmount = ( ) => ({
        type: 'SORT_BY_AMOUNT',
        amount
    });

    // SET_START_DATE
    const setStartDate = ( startDate ) => ({
        type: 'SET_START_DATE',
        startDate
    });
    // SET_END_DATE     //* no need to set default to undefined === it is automatically undefined
    const setEndDate = ( endDate ) => ({
        type: 'SET_END_DATE',
        endDate
    });

//* REDUCERS ==============================
    //expenses Reducer Default State
    const expensesReducerDefaultState = [];

    //EXPENSES REDUCER
    const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return [    // returns the array
                    ...state,   // adds the current state
                    action.expense  // adds the new state action.expense object
                ];
            
            case 'REMOVE_EXPENSE':
                return state.filter(({ id }) => id !== action.id);  // does not change the array but returns a new array

            case 'EDIT_EXPENSE':
                //GOES through every expense in the array & finds the match, then change the match
                return state.map((expense) => {
                    if(expense.id === action.id){
                        return{
                            ...expense, //grab current expenses
                            ...action.updates
                        };
                    } else {
                        return expense;
                    };
                });

            default:
                return state;
        }
    };

    //Filters Reducer DefaultState
    const filtersReducerDefaultState = {
        text: ' ',
        sortBy: 'date',
        amount: 0,
        startDate: undefined,
        endDate: undefined
    };

    //Filters Reducer
    const FiltersReducer = ( state = filtersReducerDefaultState, action ) => {
        switch (action.type) {
            //! CHALLENGE === create filter 
            case 'SET_TEXT_FILTER': 
                return {
                    ...state,   //existing state
                    text: action.text   //updates existing state with current text
                }
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'
                }
            case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'

                }
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.startDate
                }
            case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate
                }
            default: 
                return state;
        }
    }
//timestamps  === (wrote in milliseconds) Are positive or negative integers 33400, 10, -203 
//start on January 1st 1970 (unix epoch (epix)



//Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expenses)  => {
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
        

        //todo figure out if expenses.description has the text variable string inside of it
        //todo includes
        //todo convert both strings to lower case
        const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());


        return startDateMatch && endDateMatch && textMatch;
    });
};

    // Store creation
    const store = createStore(
        //REDUCERS to combine
        combineReducers({
            // expenses to be managed by expensesReducer
            expenses: expensesReducer,
            filters: FiltersReducer
        })
        
    );

    store.subscribe(() => {
        const state = store.getState(); // GETS the entire state
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
        //console.log(store.getState());
    });
//* DISPATCHED CALLS ============================================

    // store CALL (actionGenerator(value))

    const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
    const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

    // store.dispatch(removeExpense({ id: expenseOne.expense.id }));   //removes expense by id
    // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

    // //! CHALLENGE 
    // //! wire up setTextFilter
    // store.dispatch(setTextFilter('rent'));
     store.dispatch(setTextFilter('FFEE'));
    // store.dispatch(setTextFilter());

    //SORT_BY_DATE
    // store.dispatch(sortByDate());
    // SORT_BY_AMOUNT
    // store.dispatch(sortByAmount()); // no need for a value
    
    // SET_START_DATE
    //  store.dispatch(setStartDate(125));  //startDate 125
    // store.dispatch(setStartDate());     // start undefined
    // // SET_END_DATE
    store.dispatch(setEndDate(1250));   // endDate 1250
    
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

//todo =====================================
//todo SPREADING OBJECTS
//todo =======================================
// const user = {
//     name: 'Jen',
//     age: 24
// }

// console.log({
//    age: 26, // gets overrided by the user array age: 24
//     ...user,
//     location: "Atlanta", // ADD location property to the current array: user
      //age: 27       // Overrides user array age: 24 to new value: 27
// });