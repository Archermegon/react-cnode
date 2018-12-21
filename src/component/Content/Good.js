import React, { Component } from "react";
import Same from "./Same";

class Good extends Component {
  render() {
    const { match } = this.props;
    const path = match.path.slice(1);
    return <Same ind="1" path={path} />;
  }
}

export default Good;
