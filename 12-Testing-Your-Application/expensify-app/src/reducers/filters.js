//# FILTERS REDUCER

import moment from 'moment';
    //Filters Reducer DefaultState
    const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'), // START of the month
        endDate: moment().endOf('month')        //END of the month
    };

    //# CAN `EXPORT DEFAULT` the reducer directly because there are no dependencies and it is a function

    //Filters Reducer
    export default ( state = filtersReducerDefaultState, action ) => {
        switch (action.type) {
            
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

