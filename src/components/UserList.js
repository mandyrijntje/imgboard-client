import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  render() {
    return (
      <div>
        <h3>Users list</h3>
        <ul>
          {this.props.users.map(user => (
            <li>
              <Link to={`/users/${user.id}`}> {user.email}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
