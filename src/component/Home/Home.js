import React, { Component } from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import All from "./../Content/All";
import Good from "./../Content/Good";
import Share from "./../Content/Share";
import Job from "./../Content/Job";
import Ask from "./../Content/Ask";

class Home extends Component {
  state = {
    topics: [],
    type: "all"
  };
  componentDidMount() {
    const { type } = this.state;
  }
  render() {
    const navArr = [
      { type: "all", txt: "全部", pagesNum: "84" },
      { type: "good", txt: "精华", pagesNum: "" },
      { type: "share", txt: "分享", pagesNum: "" },
      { type: "ask", txt: "问答", pagesNum: "" },
      { type: "job", txt: "招聘", pagesNum: "" }
    ];
    const component = [All, Good, Share, Ask, Job];
    const nav = navArr.map(ele => (
      <li key={ele.type}>
        <NavLink to={`/${ele.type}`}>{ele.txt}</NavLink>
      </li>
    ));
    const route = navArr.map((ele, ind) => (
      <Route key={ind} component={component[ind]} path={`/${ele.type}`} />
    ));
    return (
      <Homo>
        <BrowserRouter>
          <>
            <ul className="nav">{nav}</ul>
            {route}
          </>
        </BrowserRouter>
      </Homo>
    );
  }
}

export default Home;
const Homo = styled.div`
  width: 900px;
  border-radius: 3px;
  background-color: #fff;
  .nav {
    display: flex;
    list-style: none;
    background-color: #f6f6f6;
    align-items: center;
    padding: 10px;
    li {
      margin-right: 20px;
    }
    li a {
      color: #80bd01;
      padding: 0 10px;
      display: block;
      border-radius: 2px;
    }
    .active {
      background-color: #80bd01;
      color: #fff;
    }
  }
`;
