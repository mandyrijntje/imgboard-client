import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/user";
import UsersList from "./UserList";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log("users list", this.props.user.list);
    return (
      <div>
        <UsersList users={this.props.user.list} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
