import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.task.completed} />
      <p>{props.task.task}</p>
    </div>
  );
}
export default ToDoItem;
