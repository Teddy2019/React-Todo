import React,  { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoLists: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      }],
      task: "",
      id: Date.now(),
      completed: false,
      
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const newtodoList = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    
    this.setState({ todoLists: [...this.state.todoLists, newtodoList]});
    
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList myTodo={this.state.todoLists} />
        <TodoForm mySubmit={this.submitHandler} myValue={this.state.task} myChange={this.changeHandler} />
      </div>
    );
  }
}

export default App;
