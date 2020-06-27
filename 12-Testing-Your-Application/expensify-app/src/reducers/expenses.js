//# EXPENSES REDUCERS ==============================
    
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
                    if (expense.id === action.id) {
                        return {
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

// Because I only need one thing from it    
export default expensesReducer;