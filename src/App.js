import React,  { Component } from 'react';
import './index.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
      task: "",
      id: '',
      completed: false,
      
    };
  }


  submitHandler = event => {
    event.preventDefault();
    const newtodoList = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };
    
    this.setState({ todoLists: [...this.state.todoLists, newtodoList]});
    
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleTask = id => {
    const newtodoLists = this.state.todoLists.map(
      todo => {
        if (todo.id === id) {
          const newTodo = {
            ...todo,
            completed: !todo.completed
          };
          return newTodo;
        } else {
          return todo;
        }
      }
    )

    this.setState({ todoLists: newtodoLists });
  };

  deletcompleted = event => {
    event.preventDefault();
    const newtodoLists = this.state.todoLists.filter(
      todo => {return todo.completed === false});

    this.setState({ todoLists: newtodoLists })
  }

  
  render() {
    return (
      <div>
        <h2>My Todo List!</h2>
        <TodoList myTodo={this.state.todoLists} toggleTask={this.toggleTask} />
        <TodoForm mySubmit={this.submitHandler} myValue={this.state.task} myChange={this.changeHandler} deletcompleted={this.deletcompleted} />
      </div>
    );
  }
}

export default App;
