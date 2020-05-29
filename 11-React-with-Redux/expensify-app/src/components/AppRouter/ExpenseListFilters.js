import React from 'react';
import { connect } from 'react-redux';  //# CONNECT to the store
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';


/*
    ? COMPONENT DESCRIPTION
    ? COMPONENT READS & WRITES & REMOVES TO THE STORE
*/

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,


    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch( setStartDate( startDate ) );
        this.props.dispatch( setEndDate( endDate ) );
    };
    onFocusChange = (calendarFocused) => {
        this.setState( () => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                {/* //# onChange () function updates on change */}
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    {/* 
                        //# Can DISPATCH ACTIONS from the store
                        //# UPDATES THE FIELD UPON CHANGE 
        
                    */}
                    this.props.dispatch( setTextFilter(e.target.value) );
                    //console.log(e.target.value)
                }} />
                
                {/* //! CHALLENGE SETUP SELECT ELEMENT */}
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e)=> {
                        if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                    >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ this.state.calendarFocused }
                    onFocusChange={ this.onFocusChange }
                    showClearDates={false}
                    numberOfMonths={1}
                    isOutsideRange={ () => false }

                />
            </div>
        );

    }
};





//! CHALLENGE SETUP SELECT ELEMENT
//! 1) Setup a value and onChange for select
//! 2) ADD conditional logic onChange for FILTERS setByAmount & setByDate to determine which one should be dispatching

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);