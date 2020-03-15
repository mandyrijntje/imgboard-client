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
          {this.props.images
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(image => {
              const dateCreation = new Date(image.createdAt);

              const now = new Date();

              const differenceHours = parseInt(
                now.getTime() - dateCreation.getTime()
              );

              console.log(now);
              console.log(dateCreation);
              console.log(differenceHours);
              return (
                <div key={image.id}>
                  <h3>{image.title}</h3>
                  <img src={image.url} alt={image.title} />
                  <p>
                    Uploaded{" "}
                    {differenceHours > 3600000
                      ? parseInt(differenceHours / 3600000)
                      : parseInt(differenceHours / 60000)}{" "}
                    {differenceHours > 3600000 ? "hours" : "minutes"} ago
                  </p>
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
