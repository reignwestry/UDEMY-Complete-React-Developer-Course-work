# Integrate React with REDUX

    

## Why?
    
    A. CREATE CONNECTED COMPONENTS -=== integrate components with REDUX
    B. FETCH DATA off of the REDUX Store
    C. When the data changes it will automatically get re-rendered with the latest updates to the store
        

### Integrate React to REDUX 

1. Create directory and file structure
    (Breaking up the REDUX store into separate files that)

    A. SEPARATE ACTION Generators by CATEGORY  into "actions" folder under src === category.js 
            
        I. ADD all necessary IMPORTS 
        II. CONVERT ALL action generators to named-exports

    B. SEPARATE (FILTERS) ACTION Generators by CATEGORY  into "actions" folder under src === filters.js 

            I. ADD all necessary IMPORTS 
            II. CONVERT ALL action generators to named-exports
            `const ===> export const`
            
     C. CREATE separate files for each REDUCER in REDUCERS dir. 

        I. ADD IMPORTS AND export defaults.

    D. SEPARATE SELECTORS by CATEGORY  into "actions" folder under src ===  selectors -> categories.js 
    
    E. SEPARATE STORE setup by CATEGORY  into "actions" folder under src  -> store === configureStore.js 

        I. ADD IMPORTS (createStore, combinedReducers) from REDUX

        II. IMPORT REDUCERS from REDUCER dir

        III. CONVERT store creation function to export default and add a return to store

    F.  ADD REDUX imports & store creation to app.js

    G.  IN APP.js, 
    
        1. create a store call ===>
     ` const store = configureStore(); `

        2. CONSOLE.LOG ALL store states to the console
    ` console.log(store.getstate()); `

        3. TEST ALL REDUCER PROCESS THROUGH App.js
           A.   IMPORT ALL Actions, Selectors, and Filters 
           B.   RUN STORE.DISPATCHES() 

    H. 



