import React, { useState } from "react";
import Todo from "./Component/Todo";
import User from "./Component/User";
import Error from "./Component/Error";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [userData, setUserData] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);
  const fetchingUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error");
        }
      })
      // .then((data) => console.log(data));
      .then((data) => setUsers(data))
      .catch((error) => {
        setErrorFlag(true);
      });
    setUserData(true);
  };
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setTodos(data));

    setUserData(false);
  };

  //! Before render show here we put our error boundary
  if (errorFlag) {
    return <Error />;
  }
  return (
    <div>
      <div className="topbar"></div>
      <button onClick={fetchTodos}>Todos</button>
      <button onClick={fetchingUser}>User</button>
      <hr />

      {userData
        ? users.map((user, index) => {
            return (
              <>
                <h3>User Component - {(index + 1).toString()}</h3>
                <User user={user} key={index} />
              </>
            );
          })
        : todos.map((todo, index) => {
            return (
              <>
                <h3>Todo Component - {(index + 1).toString()}</h3>
                <Todo todo={todo} key={index} />;
              </>
            );
          })}
    </div>
  );
};

export default Fetch;
