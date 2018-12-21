import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import "./../static/global.css";
import Home from "./Home/Home";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="wrapper" style={{ background: "#e1e1e1" }}>
        <Header />
        <Main>
          <Home />
        </Main>
      </div>
    );
  }
}

export default App;
const Main = styled.div`
  width: 90%;
  margin: 20px 0;
  margin-left: 5%;
  padding-bottom: 10px;
`;
