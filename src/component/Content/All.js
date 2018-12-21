import React, { Component } from "react";
import Same from "./Same";

class All extends Component {
  render() {
    const { match } = this.props;
    const path = match.path.slice(1);
    return <Same ind="0" path={path} />;
  }
}

export default All;
