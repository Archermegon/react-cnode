import React, { Component } from "react";
import Same from "./Same";

class Share extends Component {
  render() {
    const { match } = this.props;
    const path = match.path.slice(1);
    return <Same ind="2" path={path} />;
  }
}

export default Share;
