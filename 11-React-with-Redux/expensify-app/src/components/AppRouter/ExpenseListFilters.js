import React from 'react';
//# CONNECT to the store
import { connect } from 'react-redux';


const ExpenseListFilters = (props) => (
    <div>
        <input type='text' value={props.filters.text}/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);