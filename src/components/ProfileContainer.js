import React, { Component } from "react";
import { connect } from "react-redux";
import { getUniqueUser } from "../store/actions/user";
import { getUserImages } from "../store/actions/images";
import Profile from "./Profile";

class ProfileContainer extends Component {
  state = {
    userReceived:"",
    imagesReceived:[]

  };

  componentDidMount() {
    this.setState({userReceived:"",imagesReceived:[]
  })
    this.props.getUniqueUser(this.props.match.params.id);
    this.props.getUserImages(this.props.match.params.id);
    
  }

  componentWillUpdate(){
    this.setState({userReceived:this.props.user.userDisplayed, imagesReceived:this.props.images
    })
  }

  render() {
    

    if (!this.props.user.userDisplayed) {
      return <p>Loading...</p>;
    } else {
      return <Profile user={this.state.userReceived} images={this.state.imagesReceived} />;
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
