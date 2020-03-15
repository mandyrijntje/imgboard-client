import React, { Component } from "react";
import EditFormContainer from "./EditFormContainer";

export default class ImageList extends Component {
  render() {
    const currentPath = window.location.pathname;
    if (!this.props.images) {
      return <p>loading...</p>;
    } else {
      return (
        <div>
          {this.props.images.map(image => {
            const dateCreation = new Date(image.createdAt);
            const now = new Date();
            const differenceHours = parseInt(
              dateCreation.getHours() - now.getHours() / 3600000
            );
            return (
              <div key={image.id}>
                <h3>{image.title}</h3>
                <img src={image.url} alt={image.title} />
                <p>Uploaded {differenceHours} hours ago</p>
                {currentPath.includes("users") ? (
                  <EditFormContainer imageId={image.id} />
                ) : null}

                <button onClick={() => this.props.destroyImage(image.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
