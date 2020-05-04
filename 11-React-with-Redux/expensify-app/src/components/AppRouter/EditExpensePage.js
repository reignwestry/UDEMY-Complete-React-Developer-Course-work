import React from 'react';

//console.log(props) == shows all of the props you can use in the browser console

// {props.match.params.id} == shows the value of props>match>params>id

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            Editing the expense with id of {props.match.params.id}
        </div>
    );
};
export default EditExpensePage;