import React from "react";

function ToDoItem(props) {
  const strikeThrough = {
    textDecoration: "line-through",
    color: "grey"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.handleChange(props.task.id)}
      />
      <p style={props.task.completed ? strikeThrough : null}>
        {props.task.task}
      </p>
    </div>
  );
}

export default ToDoItem;
