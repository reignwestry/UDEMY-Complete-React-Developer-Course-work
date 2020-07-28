//# EXPENSES SELECTOR TEST CASES
import moment from 'moment'; // imports moment()
import selectExpenses from '../../selectors/expenses';


//# =============================================
//# TEST DATA (DUMBY DATA ARRAY)
const expenses = [{
    id: '1',
    description: 'Gum', 
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'RENT', 
    note: '',
    amount: 109500,
    //createdAt: -1000    // -1sec in the past
    createdAt: moment(0).subtract(4, 'days').valueOf()    // -4 days in the past
},
{
    id: '3',
    description: 'Credit Card', 
    note: '',
    amount: 4500,
    //createdAt: 1000 // +1sec in the future
    createdAt: moment(0).add(4, 'days').valueOf() // +4 days in the future
}];
//# =================================================

test('expensesSelector should filter by text value', () => {
    const filters = {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2], //grabs 3rd array item
        expenses [1] //grabs 2nd array item
    ])
});

test(' expensesSelector should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result  = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]]);
});

//! CREATE 3 TEST CASES
//! should filter By endDate
//! should sort by date
//! should sort by amount
//* should sort by endDate
test('expensesSelector should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days') //sortby to days in future
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
    
});

//* should sort by Date
test('expensesSelector should sort by Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(2, 'days'),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

//* should sort by amount
test('expensesSelector should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});