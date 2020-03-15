import React, { Component } from "react";
import { connect } from "react-redux";
import { createImage } from "../store/actions/images";
import CreateForm from "./CreateForm";
class CreateFormContainer extends Component {
  state = {
    title: "",
    url: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createImage(this.state);

    this.setState({
      title: "",
      url: ""
    });
  };

  render() {
    return (
      <CreateForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapDispatchToProps = {
  createImage
};

export default connect(null, mapDispatchToProps)(CreateFormContainer);
