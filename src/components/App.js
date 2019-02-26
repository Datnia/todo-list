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
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "Vietnam",
      isVegan: false,
      isVegetarian: false,
      isWater: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />
          <br />
          <label>
            Gender:
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <br />

          <select
            name="destination"
            onChange={this.handleChange}
            value={this.state.destination}
          >
            <option value="Vietnam">Vietnam</option>
            <option value="Greece">Greece</option>
            <option value="Thailand">Thailand</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
          </select>
          <br />
          <br />

          <label>
            Dietary Restrictions?
            <br />
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            Vegan
            <br />
            <input
              type="checkbox"
              name="isVegetarian"
              onChange={this.handleChange}
              checked={this.state.isVegetarian}
            />
            Vegetarian
            <br />
            <input
              type="checkbox"
              name="isWater"
              onChange={this.handleChange}
              checked={this.state.isWater}
            />
            Water only
          </label>
          <br />
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.isVegan ? "Vegan" : null}
          {this.state.isVegetarian ? "Vegetarian" : null}
          {this.state.isWater ? "Water only" : null}
        </p>
      </main>
    );
  }
}

export default App;
