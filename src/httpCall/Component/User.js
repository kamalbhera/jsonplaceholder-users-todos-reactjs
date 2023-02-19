import React from "react";

const User = (props) => {
  const { user } = props;
  return (
    <div className="box1">
      <h3>Id - {user.id}</h3>
      <h3>Name - {user.name}</h3>
      <h3>Username - {user.username}</h3>
      <h3>Email - {user.email}</h3>
    </div>
  );
};

export default User;
