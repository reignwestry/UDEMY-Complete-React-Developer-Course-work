/*
    note Component State
    ===============
        = allows are components to manage some data
            ( State is an object that changes data )


        ? STEP 1 = set up a default state set of values
        ? STEP 2 = Component rendered with default state values
        (* === behind the scenes NO DIRECT INTERACTIONS)
        ? STEP 3 Change state based on event
        ? STEP 4 Component re-rendered using new state values *
        ? STEP 5 Start again at 3

        <Counter />


        {
            count: 0;   //default value
        }

        handleAddOne() {
            //Increase "count" state by 1
        }
*/