import React, { Component } from "react";
// import Products from "./Products";
// import productData from "./productData";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
import ToDoItem from "./TodoItem";
import "../style.css";
import todoData from "./todoData";
// import Navbar from "./Header";
// import MainContent from "./MainContent";
// import Footer from "./Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData
    };
  }
  render() {
    const todoComponents = this.state.todos.map(task => (
      <ToDoItem key={task.id} task={task} />
    ));
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        {todoComponents}
      </div>
    );
  }
}

export default App;
