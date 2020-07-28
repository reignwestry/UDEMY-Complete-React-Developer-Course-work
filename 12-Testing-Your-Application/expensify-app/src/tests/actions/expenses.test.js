import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//# TESTS action removeExpense() 
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//! CHALLENGE CREATE TEST CASE
//# TESTS action editExpense()
test('should setup edit expense action object', () => {
    const action = editExpense( "32ID", { note: 'New note value' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "32ID", 
        updates: {
            note: 'New note value'
        }
    })
});

//# TESTS action addExpense() //* TAKES MULTIPLE VALUES
//! TAKES TWO test values
test('should setup add expense action object with provided values',() => {

    //TESTER dumby data
    const expenseData = {
        description: 'Rent',
        amount: 109500,         //$1,095.00
        createdAt: 1000,
        note: 'This was last months rent'
    };

    const action = addExpense(expenseData);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),

            
        }
    })

});

//! CHALLENGE BUILD TEST
test('should setup add expense action object with default values',() => {

    //! CALL addExpense with not data
    //! Assert the value of the return object

    const action = addExpense();
 
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String), // CHECKS FOR ANY STRING IN ID
            description: '',
            note: '',
            amount: 0,
            createdAt: 0

        }
    });
});