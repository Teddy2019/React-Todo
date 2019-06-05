import React,  { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const TodoLists = [
  
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Todolist: TodoLists,
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
console.log(this.state.TodoList);
    this.setState({
      TodoLists: [...this.state.TodoList, newtodoList]
    });
    TodoLists.push(newtodoList);
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList myTodo={this.state.Todolist} />
        <TodoForm mySubmit={this.submitHandler} myValue={this.state.task} myChange={this.changeHandler} />
      </div>
    );
  }
}

export default App;
