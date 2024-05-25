// src/ClassMainComponent.js
import React, { Component } from "react";
import FormClassComponent from "./FormClassComponent";
import DisplayClassComponent from "./DisplayClassComponent";

class ClassMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null,
    };
  }

  handleFormSubmit = (newUser) => {
    this.setState((prevState) => {
      const userExists = prevState.users.some(
        (user) => user.email === newUser.email
      );
      if (userExists) {
        return {
          users: prevState.users.map((user) =>
            user.email === newUser.email ? newUser : user
          ),
          selectedUser: null,
        };
      } else {
        return {
          users: [...prevState.users, newUser],
          selectedUser: null,
        };
      }
    });
  };

  handleUserSelect = (email) => {
    const { users } = this.state;
    const user = users.find((user) => user.email === email);
    this.setState({ selectedUser: user });
  };

  render() {
    const { users, selectedUser } = this.state;

    return (
      <div>
        <h1>Class Component</h1>
        <div className="flex flex-col gap-5">
          <FormClassComponent
            onSubmit={this.handleFormSubmit}
            userData={selectedUser}
          />
          <DisplayClassComponent
            users={users}
            onSelectUser={this.handleUserSelect}
          />
        </div>
      </div>
    );
  }
}

export default ClassMainComponent;
