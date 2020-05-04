import { createStore } from 'redux';

console.log('06-Reducers');

const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',                          
    incrementBy 
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count } = {} ) => ({
    type: 'SET',
    count
});
const resetCount = ( ) => ({
    type: 'RESET',
    
});
/**
 *                *  REDUCER
 *                 ==========
 *      a predictable state container for Javascript apps.
 * 
 *      *    ADVANTAGES
 *      ==================
 *      + Helps you write applications that behave consistently
 *      + RUN in different environments (clients, server, and native)
 *      + Easy to test
 *      + Specify how the application's state changes in response
 *      + Provides a great developer experience
 *          + live code editing with a time traveling debugger
 * 
 *         * Key ATTRIBUTES
 *          ==============
 *          1. Reducers are pure functions 
 *              + output is only determined by the input (state and action)
 * 
 *             * NON-PURE FUNCTION                                  PURE FUNCTION
 *              ==================                                 ================
 *              * depends on global variable a 
 *              * interact with things outside its scope                    
 *              let a = 10;                                         const add = (a, b) => {
 *              const add = () => {                                     return a + b;
 *                  return a + b;                                   };
 *              };
 * 
 *          2. Never change state or action                                                  
 *                                                            
 */

//* REDUCERS ==========================================================
const countReducer = (state = { count: 0 }, action) =>{
    switch (action.type){
        
        case 'INCREMENT': //actions
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            
            return{
                count: state.count - action.decrementBy
            };
        case 'SET' : 
            return {
                count: action.count
            };
        case 'RESET':
            return{
                count: 0
            };  
        default:
            return state;
    }   
}

const store = createStore( countReducer);
//* ======================================================
store.subscribe(() =>{
    console.log(store.getState());
});
 
store.dispatch(incrementCount()); //action generator calls

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch( resetCount() );

store.dispatch( setCount({ count: 101 }) );

//===============================================================    
console.log(store.getState());