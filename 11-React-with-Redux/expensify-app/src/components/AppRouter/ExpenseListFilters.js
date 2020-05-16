import React from 'react';
//# CONNECT to the store
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

/*
    ? COMPONENT DESCRIPTION
    ? COMPONENT READS & WRITES & REMOVES TO THE STORE
*/

const ExpenseListFilters = (props) => (
    <div>
        {/* //# onChange () function updates on change */}
        <input type='text' value={props.filters.text} onChange={(e) => {
            {/* 
                //# Can DISPATCH ACTIONS from the store
                //# UPDATES THE FIELD UPON CHANGE 

            */}
            props.dispatch( setTextFilter(e.target.value) );
            //console.log(e.target.value)
        }} />
        
        {/* //! CHALLENGE SETUP SELECT ELEMENT */}
        <select 
            value={props.filters.sortBy} 
            onChange={(e)=> {
                if(e.target.value === 'date'){
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'amount'){
                    props.dispatch(sortByAmount());
                }
            }}
            >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

//! CHALLENGE SETUP SELECT ELEMENT
//! 1) Setup a value and onChange for select
//! 2) ADD conditional logic onChange for FILTERS setByAmount & setByDate to determine which one should be dispatching

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);