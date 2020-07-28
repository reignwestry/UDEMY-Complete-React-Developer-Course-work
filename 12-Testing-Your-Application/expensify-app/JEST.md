# JEST JS TESTING
#================

I. INSTALL JEST
>     yarn add --dev jest    

II. CONFIG JEST
    open package.json: 

        A. ADD script:
            "test": "jest"
            * NOW you can RUN JEST with:
                " yarn test "

        B. Create tests directory in src directory

        C. Create a test file to test directory
            <add.test.js> with a test function to test

            //=======================================

            const add = (a, b) => a + b;

            //CALLS JEST TEST() function
            test('should add two  numbers', () =>{
                const result = add(3, 4);
            
            
                //# ARGUMENT CHECK === WHAT expect() does:
                // if(result !== 7 ) {
                //     /*THROWS ERROR*/
                //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
                // }

                
                //CHECKS if result = 7 
                expect(result).toBe(7);
            });
            
            //=======================================
        
        D. RUN COMMAND LINE:
            yarn test

III. SET JEST TO WATCH MODE (continuous)
        
        A. CHANGE JEST script in package.json to continuously watch the files:
            jest --watch


III. JEST TEST ARGUMENT METHODS

        .toBe()         === exactly the same
        .toEqual()      === compare objects/functions
        .any            === expects to be a function, boolean, etc.




