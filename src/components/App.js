import React, { Component } from "react";
// import Conditional from "./Conditional";
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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: todoData
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(id) {
//     this.setState(prevState => {
//       const newTodo = prevState.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       return {
//         todos: newTodo
//       };
//     });
//   }
//   render() {
//     const todoComponents = this.state.todos.map(task => (
//       <ToDoItem key={task.id} task={task} handleChange={this.handleChange} />
//     ));
//     return (
//       <div className="todo-list">
//         <h1>To Do List</h1>
//         {todoComponents}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>++</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       };
//     });
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
//     let displayText = this.state.isLoggedIn ? "in" : "out";
//     return (
//       <div>
//         <h2>You are logged {displayText}</h2>
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       character: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({ loading: true });

//     fetch("https://swapi.co/api/people/1/")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         });
//       });
//   }

//   render() {
//     const isLoading = this.state.loading
//       ? "loading ..."
//       : this.state.character.name;
//     return <div>{isLoading}</div>;
//   }
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  );
  }
}
 

export default App;
