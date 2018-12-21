import React, { Component } from "react";
import Same from "./Same";

class Ask extends Component {
  render() {
    const { match } = this.props;
    const path = match.path.slice(1);
    return <Same ind="3" path={path} />;
  }
}

export default Ask;
