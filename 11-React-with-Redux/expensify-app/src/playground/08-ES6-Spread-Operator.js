 console.log('07-ES6 Spread Operator in Reducers'); 
 console.log('//==============//'); 
 
 // combineReducers === Allows you to create multiple functions that define how REDUX changes
 import {createStore, combineReducers} from 'redux';
 import uuid from 'uuid'; // to generate unique identifiers

//todo ACTIONS TO CREATE
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
                //NEVER USE state.push == because it changes state
                //.concat == combines variables
                //.push === replaces the last variable to the end of the array
                //state.concat == combines state with the action without changing state
                // Spread Operator === [...arrayName, 'newVariable'] == adds the new variable to the end of the array (TEMPERARily) 
                //return state.concat(action.expense);
                return [    // returns the array
                    ...state,   //* [ARRAY SPREAD OPERATOR ] adds the current state
                    action.expense  // adds the new state action.expense object
                ];
            
            case 'REMOVE_EXPENSE':
                return state.filter(({ id }) => id !== action.id);  // does not change the array but returns a new array

            // case 'EDIT_EXPENSE':
            //     return{

            // };
            // case 'ADD_EXPENSE':
            //     return{

            // };

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

    store.subscribe(() => {
        console.log(store.getState());
    });
    /**
     *  DISPATCHED CALLS
        Dispatched action goes through both reducer
     */
    //console.log(store.getState()); // logs all states to the console
    //store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
    const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
    const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
    
    // TO SEE WHAT COMES BACK JUST console.log the variable     console.log(expenseOne)
    store.dispatch(removeExpense({ id: expenseOne.expense.id }));   //removes expense by id


    
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
