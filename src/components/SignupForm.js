import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            E-mail :
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.props.values.email}
              onChange={this.props.onChange}
            />
          </label>
          <label>
            Password :
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.props.values.password}
              onChange={this.props.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
