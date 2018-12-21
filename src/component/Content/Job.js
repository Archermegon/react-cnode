import React, { Component } from "react";
import Same from "./Same";

class Job extends Component {
  render() {
    const { match } = this.props;
    const path = match.path.slice(1);
    return <Same ind="4" path={path} />;
  }
}

export default Job;
