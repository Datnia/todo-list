import React, { Component } from "react";
import ToDoItem from "./TodoItem";
import "../style.css";
import AddTask from "./AddTask";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
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

  delTask = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTask = task => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    const todoComponents = this.state.todos.map(task => (
      <ToDoItem
        key={task.id}
        task={task}
        handleChange={this.handleChange}
        onClick={this.delTask}
      />
    ));
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        {todoComponents}
        <br />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
