import React, { Component } from "react";
import ImageList from "./ImageList";

export default class Profile extends Component {
  componentWillUnmount(){
   this.props.user.name=""
  }
  render() {
    return (
      <div>
        <h2>{this.props.user}</h2>
        <ImageList images={this.props.images} />
      </div>
    );
  }
}
