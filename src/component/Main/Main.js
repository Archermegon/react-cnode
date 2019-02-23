import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home/Home";
import TopicContent from "../TopicContent/TopicContent";
import Post from "../Post/Post";
import User from "../User/User";
import HomePage from "../HomePage/HomePage";

class Main extends Component {
  render() {
    return (
      <Man>
        <Switch>
          <Route component={Post} path="/post" />
          <Route component={User} path="/user/:name" />
          <Route component={HomePage} path="/self/:id" />
          <Route component={TopicContent} path="/topic/:id" />
          <Route component={Home} path="/" />
        </Switch>
      </Man>
    );
  }
}

export default Main;

const Man = styled.div`
  width: 900px;
`;
