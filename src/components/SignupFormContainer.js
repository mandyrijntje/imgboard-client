import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./UserForm";
import { createUser } from "../store/actions/user";

class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <SignUpForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
        {this.props.user.createdUser ? (
          <p>Thank you for signing up {this.props.user.createdUser}</p>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  createUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
