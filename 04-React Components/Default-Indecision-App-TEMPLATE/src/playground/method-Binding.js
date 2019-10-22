/*
    Method Binding = Check out binding at developer.mozilla.org
        bind() = creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

    Syntax
        function.bind(thisArg[, arg1[, arg2[, ...]]])


    this.binding handleRemoveAll(), handleAddOption



*/

//es6 Object
const obj = {
    name: 'Reign',
    getName(){
        return this.name;
    }
}

const func = function () {

}

const getName = obj.getName.bind({ name: 'Jamaal' }); //gets & changed binding of obj
console.log(getName());