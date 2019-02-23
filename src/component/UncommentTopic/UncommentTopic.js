import React, { Component } from "react";
import axios from "axios";

class UncommentTopic extends Component {
  state = {
    topics: null
  };
  componentDidMount() {
    axios.get();
  }

  render() {
    return <div className="otherTopics">un</div>;
  }
}

export default UncommentTopic;
