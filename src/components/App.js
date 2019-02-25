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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       employee: true,
//       gender: "",
//       favColor: "green"
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({
//           [name]: checked
//         })
//       : this.setState({ [name]: value });
//   }

//   handleSubmit() {

//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.firstName}
//             placeholder="First Name"
//             name="firstName"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             value={this.state.lastName}
//             placeholder="Last Name"
//             name="lastName"
//             onChange={this.handleChange}
//           />
//           <br />
//           <label>
//             Employee?
//             <input
//               type="checkbox"
//               name="employee"
//               checked={this.state.employee}
//               onChange={this.handleChange}
//             />
//           </label>
//           <br />
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={this.state.gender === "male"}
//               onChange={this.handleChange}
//             />
//             Male
//           </label>
//           <br />

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={this.state.gender === "female"}
//               onChange={this.handleChange}
//             />
//             Female
//           </label>
//           <br />
//           <br />
//           <select
//             value={this.state.favColor}
//             onChange={this.handleChange}
//             name="favColor"
//           >
//             <option value="red">Red</option>
//             <option value="green">Green</option>
//             <option value="blue">Blue</option>
//           </select>
//           <h1>
//             {this.state.firstName} {this.state.lastName} {this.state.favColor}
//           </h1>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <form>
          <input placeholder="First Name" />
          <br />
          <input placeholder="Last Name" />
          <br />
          <input placeholder="Age" />
          <br />

          {/* Create radio buttons for gender here */}
          <br />

          {/* Create select box for location here */}
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {/* First and last name here */}</p>
        <p>Your age: {/* Age here */}</p>
        <p>Your gender: {/* Gender here */}</p>
        <p>Your destination: {/* Destination here */}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}

export default App;
