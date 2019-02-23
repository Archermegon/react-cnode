import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import Topics from "../Topics/Topics";

class Home extends Component {
  state = {
    topics: [],
    type: ""
  };
  componentDidMount() {
    const { type } = this.state;
  }
  render() {
    const navArr = [
      { type: "all", txt: "全部" },
      { type: "good", txt: "精华" },
      { type: "share", txt: "分享" },
      { type: "ask", txt: "问答" },
      { type: "job", txt: "招聘" }
    ];
    const nav = navArr.map(ele => (
      <li key={ele.type}>
        <NavLink to={`/${ele.type}`}>{ele.txt}</NavLink>
      </li>
    ));
    const route = navArr.map((ele, ind) => (
      <Route key={ele.type} component={Topics} path={`/${ele.type}`} />
    ));
    // const route = (
    //   <>
    //     <Route component={Same} path="/:tab" nav={navArr} />
    //     <Route component={Same} path="/" />
    //   </>
    // );
    return (
      <Homo>
        <>
          <ul className="nav">{nav}</ul>
          {route}
          <Route key="23333" component={Topics} path="/" exact />
        </>
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
