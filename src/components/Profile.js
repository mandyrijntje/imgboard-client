import React, { Component } from "react";
import ImageList from "./ImageList";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user}</h2>
        <ImageList images={this.props.images} />
      </div>
    );
  }
}
