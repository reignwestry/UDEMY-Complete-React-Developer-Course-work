import { createStore } from 'redux';

console.log('REDUX-101');
/*
    state == current state
*/

// calls createStore and sets & returns the current state
// THE STORE
const store = createStore((state = { count: 0 }, action) =>{
    //SWITCH CASE
    switch (action.type){
        //USE-CASES
        case 'INCREMENT':
            return{
                count: state.count + 1
            };
        case 'DECREMENT':
            return{
                count: state.count - 1
            };
        case 'RESET':
            return{
                count: 0
            };
        // DEFAULT    
        default:
            return state;
    }
    if (action.type === 'INCREMENT'){
        return {
            count: state.count + 1
        };
    }  else {
        return state;
    }
    
});

store.subscribe(() =>{
    console.log(store.getState());
});



//? Actions - an object that gets sent to the store
//? Actions are how you communicate with the store
//?===============================================

//I'd like to increment the count
store.dispatch(
//? Define a single property
{
    type: 'INCREMENT'
}); 
store.dispatch(
//? Define a single property
{
    type: 'INCREMENT'
}); 



//I'd like to reset the count to zero
store.dispatch(
    {
        type: 'RESET'
    });

//I'd like to decrement the count
store.dispatch(
    //? Define a single property
    {
        type: 'DECREMENT'
    }); 


// walk, stop_walking, sit, work, etc.
// increment, decrement

// How do I?



// calls to dispatch & sends the property to the store

console.log(store.getState());