import React, { Component } from "react";
import { connect } from "react-redux";
import { getUniqueUser } from "../store/actions/user";
import { getUserImages } from "../store/actions/images";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUserImages(this.props.match.params.id);
  }

  render() {
    const userDisplayed = this.props.user.userDisplayed;

    if (!userDisplayed) {
      return <p>loading</p>;
    } else {
      return <Profile user={userDisplayed} images={this.props.images} />;
    }
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
