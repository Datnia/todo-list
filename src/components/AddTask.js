import React, { Component } from "react";

class AddTask extends Component {
  state = {
    task: ""
  };

  onChange = event => this.setState({ task: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          onChange={this.onChange}
          value={this.state.task}
        />
        <button>+</button>
      </form>
    );
  }
}

export default AddTask;
