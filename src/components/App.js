import React, { Component } from "react";
// import Products from "./Products";
// import productData from "./productData";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
// import ToDoItem from "./TodoItem";
// import "../style.css";
// import todoData from "./todoData";
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

// function App() {
//   const todoComponents = todoData.map(task => (
//     <ToDoItem key={task.id} task={task} />
//   ));
//   return (
//     <div className="todo-list">
//       <h1>To Do List</h1>
//       {todoComponents}
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "Yes"
    };
  }
  render() {
    return (
      <div>
        <h1>React States {this.state.answer}</h1>
      </div>
    );
  }
}

export default App;
