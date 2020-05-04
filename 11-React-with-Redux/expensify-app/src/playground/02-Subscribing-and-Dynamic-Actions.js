import { createStore } from 'redux';
//# 02-Subscribing-and-Dynamic-Actions
console.log('02-Subscribing-and-Dynamic-Actions');


const store = createStore((state = { count: 0 }, action) =>{
    switch (action.type){
        
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
                count: state.count + incrementBy
            };
        //========================
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return{
                count: state.count - decrementBy
            };
        //=====================
        case 'SET' : 
            return {
                //sets the value of action to the value of count in the ACTION
                count: action.count
            };
        //======================
        case 'RESET':
            return{
                count: 0
            };
         //=================   
        default:
            return state;
    }
    
});
//? store.subscribe() = PRINTS the state to the store after every change

//? STOPS THE SUBSCRIPTION
//unsubscribe();

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

//? (ADVANCED) ACTION OBJECTS
store.dispatch(
{
    type: 'INCREMENT',
    incrementBy: 5
}); 

store.dispatch(
{
    type: 'INCREMENT'
}); 

store.dispatch(
    {
        type: 'RESET'
    });

store.dispatch(
    //? Define a single property
    {   
        type: 'DECREMENT'
    }); 

store.dispatch(
    //? Define a single property
    {
        type: 'DECREMENT',
        decrementBy: 10
    }); 

store.dispatch({
    type: 'SET',
    count: 101
});



console.log(store.getState());