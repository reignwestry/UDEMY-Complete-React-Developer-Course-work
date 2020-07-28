/* 
console.log('=======================================');
console.log('SETTING UP JEST JS TEST CASES - FILTERS.js');
console.log('======================================='); 
*/

import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate  } from '../../actions/filters';

//! moment() data test cases
//* setStartDate
test('should generate setStartDate action object', () => {
    
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)

    });
});

//* setEndDate
test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)

    });
});

//!====================================================
//! CHALLENGE CREATE TEST CASES FOR THE 4 OTHER FILTERS
//*setTextFilter
test('setTextFilter should generate text action object', () => {
    //# data call
    const action = setTextFilter();

    //# what it should generate
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.any(String)
    });
});

//*sortByDate
test('sortByDate should generate action object', () => {

    //# SHORTHAND VERSION
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE', date: undefined});
});

//
test('sortByAmount should generate action object', () => {
  const action = sortByAmount();
  
  expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
      
  });
});

//!==================================================