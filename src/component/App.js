import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import "./../static/global.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper" style={{ background: "#e1e1e1" }}>
          <Header />
          <Wrap>
            <Main />
          </Wrap>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
const Wrap = styled.div`
  width: 90%;
  margin: 20px 0;
  margin-left: 5%;
  padding-bottom: 10px;
`;
