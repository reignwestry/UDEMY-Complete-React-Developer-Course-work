 console.log('07-REDUX-EXPENSIFY'); 
 console.log('//==============//'); 
 
 // combineReducers === Allows you to create multiple functions that define how REDUX changes
 import {createStore, combineReducers} from 'redux';

//todo ACTIONS TO CREATE
    // ADD_EXPENSE
    // REMOVE_EXPENSE
    // EDIT_EXPENSE
    // SET_TEXT_FILTER
    // SORT_BY_DATE
    // SORT_BY_AMOUNT
    // SET_START_DATE
    // SET_END_DATE

 const demoState = {
     //ARRAY
     expenses: [{
         //OBJECTS
         id: 'aspdofij',
         description: '',
         note: 'This was the final payment for that address',
         amount: 545000, //pennies
         createdAt: 0,

     }],
     //filters
     filters:{
         text: 'rent',
         sortBy: 'amount', //date or amount
         startDate: undefined,
         endDate: undefined
     }
 };