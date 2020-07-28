const add = (a, b) => a + b;

//CALLS JEST TEST() function
test('should add two  numbers', () =>{
    const result = add(3, 4);
    
        //ACTERCIONS
    //# ARGUMENT CHECK
    // if(result !== 7 ) {
    //     /*THROWS ERROR*/
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
    // }

    
    //CHECKS if result = 7 
    expect(result).toBe(7);
});


//! CHALLENGE CREATE A TEST
const name='Mike'
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should show name', () => {
    const result = generateGreeting(name);

    expect( result ).toBe(`Hello ${name}!`);
});

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});