import React from 'react';
import './Todo.css';

function Todo(props){

    const clickHandler = () => {
        props.toggleTask(props.todoList.id);
      };

    return (
        
        <div className={`todo${props.todoList.completed ? "completed" : ""}`} onClick={clickHandler}>
          <p>{props.todoList.task}</p>
          <p>{props.todoList.id}</p>
        </div>
        
    )
}

export default Todo;