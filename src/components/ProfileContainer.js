import React, { Component } from "react";
import { connect } from "react-redux";
import { getUniqueUser } from "../store/actions/user";
import { getUserImages } from "../store/actions/images";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUniqueUser(this.props.match.params.id);
    this.props.getUserImages(this.props.match.params.id);
  }

  render() {
    const userDDisplayed = this.props.user.userDisplayed;

    return <Profile user={userDDisplayed} images={this.props.images} />;
  }
}

const mapStateToProps = state => ({
  user: state.user,
  images: state.images.listByUser
});

const mapDispatchToProps = {
  getUniqueUser,
  getUserImages
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
