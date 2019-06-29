import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return <div>StreamList</div>;
  }
}

const mapStateToProps = null;

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
