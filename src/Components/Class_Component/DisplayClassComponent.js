import React, { Component } from "react";

class DisplayClassComponent extends Component {
  render() {
    const { users, onSelectUser } = this.props;

    return (
      <div className="my-5">
        <h3 className="my-3 font-semibold">User List</h3>
        {users.length === 0 ? (
          <p>No data available</p>
        ) : (
          <div>
            <select
              onChange={(e) => onSelectUser(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Select email
              </option>
              {users.map((user) => (
                <option key={user.email} value={user.email}>
                  {user.email}
                </option>
              ))}
            </select>
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email} - {user.mobile}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayClassComponent;
