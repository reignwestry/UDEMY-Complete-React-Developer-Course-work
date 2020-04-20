import { createStore } from 'redux';

console.log('05-Refactoring-and-Organizing');
/**
 * Action generators = functions that return action objects 
 * =================
 * 
 *                   ADVANTAGES 
 *                  ---------------
 *                   + errors are easier to catch
 *                  +
 * 
 */ 
//======================================================
//* DESTRUCTURE ARGUMENTS THAT GET PASSED INTO FUNCTIONS
//          const add = (data) => {
                // 1 + 12
//              return data.a + data.b;
//          };

//DESTRUCTURING AN ARGUMENT
const add = ({ a, b }, c) => {
    // 1 + 12 + 100
    return a + b + c;
};
console.log(add({a:1, b: 12}, 100));
//=======================================================
//*  ACTION GENERATORS (ACTION OBJECTS)
                    // destructuring incrementBy
                    //incrementBy = 1  === DEFAULT: 1 if incrementBy exists great if not set = 1 
const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',                          
                        // if it is equal to a number 
    // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
    incrementBy //simplified from incrementBy : incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});
//!===================================
//!         CHALLENGE
//! CONVERT SET & RESET TO ACTION GENERATORS
const setCount = ( { count } = {} ) => ({
    type: 'SET',
    count
});
const resetCount = ( ) => ({
    type: 'RESET',
    
});
//====================================================================
const store = createStore((state = { count: 0 }, action) =>{
    switch (action.type){
        
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;  //=== REMOVED
            return{
                count: state.count + action.incrementBy
            };
        //========================
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return{
                count: state.count - action.decrementBy
            };
        //! CHALLENGE =====================
        case 'SET' : 
            return {
                //sets the value of action to the value of count in the ACTION
                count: action.count
            };
        //! CHALLENGE ======================
        case 'RESET':
            return{
                count: 0
            };
         //=================   
        default:
            return state;
    }   
});

store.subscribe(() =>{
    console.log(store.getState());
});
/**
 * 
                  MANUAL GENERATED OBJECTS
                ============================
    DISADVANTAGES                         ADVANTAGES
    ---------------                     --------------
 - Typos are hard to catch              
 - 
 */
//(manual)
// store.dispatch(
// {
//     type: 'INCREMENT',
//      incrementBy: 5
// }); 

//==========================================================
//! CONVERTED ALL MANUAL GENERATED OBJECTS TO ACTION GENERATOR CALLS

// store.dispatch(
//     {
//         type: 'INCREMENT'
//     }); 
store.dispatch(incrementCount()); //action generator calls
// store.dispatch(
//     {
//         type: 'iNCREMENT',
//         incrementBy: 10
//     }); 
store.dispatch(incrementCount({ incrementBy: 5 }));




    // store.dispatch(
//     {
//         type: 'DECREMENT'
//     }); 
store.dispatch(decrementCount());

// store.dispatch(
//     {
//         type: 'DECREMENT',
//         decrementBy: 10
//     });  
store.dispatch(decrementCount({ decrementBy: 10 }));
//! CHALLENGE ============================
// store.dispatch(
//     {
//         type: 'RESET'
//     });
store.dispatch( resetCount() );

// store.dispatch(
//     {
//         type: 'SET',
//         count: 101
//     });
store.dispatch( setCount({ count: 101 }) );
//===============================================================    
console.log(store.getState());