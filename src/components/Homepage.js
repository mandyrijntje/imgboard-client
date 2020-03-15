import React, { Component } from "react";
import { connect } from "react-redux";
import ListContainer from "./ListContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";
import CreateFormContainer from "./CreateFormContainer";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to="/users">Users list</Link>
        {!this.props.user.auth ? (
          <div>
            <SignUpFormContainer />
            <LoginFormContainer />
          </div>
        ) : (
          <CreateFormContainer />
        )}
        <ListContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Homepage);
