# REDUX


## Why We Need REDUX?
    
    A. COMPONENT STATE ISSUES (No REDUX)
        * Complex States are complex
        * Components Really aren't reusable
        * Have to pass props through all components to become accessible


    B. Able to use components anywhere
        * Individual components communicate with the store 
        * Instead of with each other
        * Each component does not need a new version of actions to do the same thing as other components
        * Each component only needs two things 
           1 What data it needs
           2 What data it needs to change
        

### SETUP & Build REDUX
    1. Install Redux  ` npm i redux  `
    2. Install uuid ` npm i uuid ` // to use unique identifiers
    3. import { createStore } from 'redux'; 
    4. Call 'createStore' once
       A. Setup a single function as the only argument.
       B. create a store.subscribe to log all of the processes in the console.
       C. create unsubscribe function to stop the subscription at anytime.
        
    5.  CREATE functions of the store either by functions (SWITCH CASE or FUNCTION)
    6.  CALL THE store.dispatch() to initiate the function
    7.  CREATE A LIST OF ALL ACTIONS TO CREATE
    8.  CREATE REDUCERS & FILTERS
    9.  CREATE action dispatches (CREATE ORDER: dispatch then action generator, then, action)
    10. CREATE Action generators
    11. CREATE ONE FUNCTION that accepts both reducers & filters
    12. Complete Redux (Separate from the app)
    13. Integrate React with Redux


#### REDUX COMPONENTS
    * createStore == creates a store
    * getState() == returns the current state object
    * combineReducers == combines reducers
    * store.dispatch == does calls to the functions of the store
    * 