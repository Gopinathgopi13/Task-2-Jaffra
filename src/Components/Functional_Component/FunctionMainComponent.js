// src/App.js
import React, { useState } from "react";
import FormFunctionalComponent from "./FormFunctionalComponent";
import DisplayFunctionalComponent from "./DisplayFunctionalComponent";

const FunctionMainComponent = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleFormSubmit = (newUser) => {
    setUsers((prevUsers) => {
      const userExists = prevUsers.some((user) => user.email === newUser.email);
      if (userExists) {
        return prevUsers.map((user) =>
          user.email === newUser.email ? newUser : user
        );
      } else {
        return [...prevUsers, newUser];
      }
    });
    setSelectedUser(null); // Clear the selected user after submission
  };

  const handleUserSelect = (email) => {
    const user = users.find((user) => user.email === email);
    setSelectedUser(user);
  };

  return (
    <div >
      <h1>Functional Component</h1>
      <div className="flex flex-col gap-5">
        <FormFunctionalComponent
          onSubmit={handleFormSubmit}
          userData={selectedUser}
        />
        <DisplayFunctionalComponent
          users={users}
          onSelectUser={handleUserSelect}
        />
      </div>
    </div>
  );
};

export default FunctionMainComponent;
