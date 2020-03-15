import React, { Component } from "react";
import { connect } from "react-redux";
import { editImage } from "../store/actions/images";
import EditForm from "./EditForm";

class EditFormContainer extends Component {
  state = {
    title: "",
    url: "",
    show: false
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.editImage(this.props.imageId, this.state);

    this.setState({
      title: this.state.title,
      url: this.state.url
    });
    this.props.history.push("/");
  };

  onHide = () => {
    this.setState({
      show: !this.state.show
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Edit</h3>
        <EditForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
          onHide={this.onHide}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  editImage
};

export default connect(null, mapDispatchToProps)(EditFormContainer);
