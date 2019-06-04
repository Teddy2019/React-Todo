// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoLists = [
    {
      task: 'Organize Garage',
      id: Date.now(),
      completed: false
    },
    
  ];

function TodoList(props) {
    return (
        <div>
        {TodoLists.map((TodoList)=>{ 
        return <Todo TodoList ={TodoList.task} />} )}
        </div>
    )
}

export default TodoList;
