import React, { Component } from "react";
import ToDoItem from "./TodoItem";
import "../style.css";
import todoData from "./todoData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData
    };
  }
  handleChange = (id, event) => {
    this.setState(prevState => {
      const newTodo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: newTodo
      };
    });
  };

  render() {
    const todoComponents = this.state.todos.map(task => (
      <ToDoItem key={task.id} task={task} handleChange={this.handleChange} />
    ));
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        {todoComponents}
        <br />
      </div>
    );
  }
}

export default App;
