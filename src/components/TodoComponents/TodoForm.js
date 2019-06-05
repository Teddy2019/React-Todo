import React from 'react';

function TodoForm(prop){
    return (
        <form onSubmit={this.submitHandler}>
        <input type='text' 
               value={this.state.task}
               onChange={this.changeHandler}
               placeholder="task"
               name="task"> </input>
        <button type='submit'>Add Todo</button>
        <button type='submit'>Clear Completed</button>
        </form>
    )
}

export default TodoForm;