import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  displayError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  displayInput = ({ input, label, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type="text" placeholder={placeholder} />
        {this.displayError(meta)}
      </div>
    );
  };

  handleSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.displayInput}
          label="Enter Title"
          placeholder="Type a title here..."
        />
        <Field
          name="description"
          component={this.displayInput}
          label="Enter Description"
          placeholder="Type a description here..."
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
  validate: validate,
  form: "streamCreate"
})(StreamCreate);

const mapStateToProps = null;

export default connect(
  mapStateToProps,
  { createStream }
)(formWrapped);
