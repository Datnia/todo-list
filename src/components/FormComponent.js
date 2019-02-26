import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          type="number"
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />
        <br />
        Gender:
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <select
          name="destination"
          onChange={props.handleChange}
          value={props.data.destination}
        >
          <option value="">--Please Choose a Destination--</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Greece">Greece</option>
          <option value="Thailand">Thailand</option>
          <option value="France">France</option>
          <option value="Canada">Canada</option>
        </select>
        <br />
        <br />
        Dietary Restrictions?
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
          Vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegetarian"
            onChange={props.handleChange}
            checked={props.data.isVegetarian}
          />
          Vegetarian
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isWater"
            onChange={props.handleChange}
            checked={props.data.isWater}
          />
          Water Only
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
        Your dietary restrictions:
        <br />
        <br />
        {props.data.isVegan ? "Vegan " : null}
        {props.data.isVegetarian ? "Vegetarian" : null}
        {props.data.isWater ? " Water only" : null}
      </p>
    </main>
  );
}

export default FormComponent;
