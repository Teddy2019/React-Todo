import React from 'react';

function TodoForm(props){
    return (
        <form onSubmit={props.mySubmit}>
        <input type='text' 
               value={props.myValue}
               onChange={props.myChange}
               placeholder="task"
               name="task" /> 
        <button type='submit'>Add Todo</button>
        <button type='button'>Clear Completed</button>
        </form>
    )
}

export default TodoForm;