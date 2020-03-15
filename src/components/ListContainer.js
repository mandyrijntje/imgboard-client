import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getImages
  // , deleteImage
} from "../store/actions/images";
import ImageList from "./ImageList";

class ListContainer extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  //   destroyImage = id => {
  //     this.props.deleteImage(id);
  //   };

  render() {
    return (
      <div>
        <ImageList
          images={this.props.images.list}
          //   user={this.props.user}
          //   destroyImage={this.destroyImage}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  images: reduxState.images
  //   user: reduxState.user
});

const mapDispatchToProps = {
  getImages
  // , deleteImage
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
