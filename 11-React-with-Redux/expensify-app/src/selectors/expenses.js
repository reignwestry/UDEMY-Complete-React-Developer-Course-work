//# Selector

//# Get Visible expenses function

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;

        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
        
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