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

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Dat" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}

// function App() {
//   const productsComponents = productData.map(product => (
//     <Products key={product.id} product={product} />
//   ));
//   return productsComponents;
// }

export default App;
