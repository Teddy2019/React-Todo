import React from 'react';

function TodoForm(props){
    return (
        <form onSubmit={props.mySubmit}>
         <input  
               onChange={props.myChange}
               type='text'
               name="task" 
               value={props.myValue}
               placeholder="...task"
          /> 
         <button type='submit'>Add Todo</button>
         <button type='button' onClick={props.deletcompleted} >Clear Completed</button>
        </form>
    )
}

export default TodoForm;