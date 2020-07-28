//# expenses Selector
import moment from 'moment';
//# Get Visible expenses function

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expense) => {
        const createdAtMoment = moment( expense.createdAt );
        const startDateMatch = startDate ? startDate.isSameOrBefore( createdAtMoment, 'day' ) : true ; //# is startDate the same day or before
        const endDateMatch = endDate ? endDate.isSameOrAfter( createdAtMoment, 'day' ) : true;  //# is endDate the same day or after
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


        return startDateMatch && endDateMatch && textMatch;

        //# SORT FUNCTION
    }).sort( (a, b) => {

        if( sortBy === 'date') {

            return a.createdAt < b.createdAt ? 1 :  -1 ;

        } else if (sortBy === 'amount') {

            return a.amount < b.amount ? 1 : -1; 
        }

    });
};