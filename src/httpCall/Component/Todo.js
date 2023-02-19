import React from "react";

const Todo = (props) => {
  const { todo } = props;
  return (
    <div className="box2">
      <ul>
        <li>{todo.id}</li>
        <li>{todo.title}</li>
      </ul>
    </div>
  );
};

export default Todo;
