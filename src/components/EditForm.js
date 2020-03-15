import React, { Component } from "react";

export default class EditForm extends Component {
  render() {
    return (
      <div>
        {this.props.values.show ? (
          <form onSubmit={this.props.onSubmit}>
            <label>
              Title :
              <input
                type="text"
                name="title"
                placeholder="title"
                value={this.props.values.title}
                onChange={this.props.onChange}
              />
            </label>
            <label>
              Url :
              <input
                type="text"
                name="url"
                placeholder="url"
                value={this.props.values.url}
                onChange={this.props.onChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        ) : null}
        <button onClick={this.props.onHide}>Hide/Show</button>
      </div>
    );
  }
}
