import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

class Post extends Component {
  state = {
    option: "",
    txt: "",
    title: ""
  };
  render() {
    const { txt, option, title } = this.state;
    return (
      <PostArticle>
        <h2>
          <Link to="/">&nbsp;&nbsp;&nbsp;主页&nbsp;&nbsp;&nbsp;</Link>
          /&nbsp;&nbsp;&nbsp;发布话题
        </h2>
        <div className="mainPart">
          <div className="choose">
            选择板块：
            <select
              name="option"
              id=""
              value={option}
              onChange={this.handleChange}
            >
              <option value="">请选择</option>
              <option value="">主页</option>
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
              <option value="dev">客户端测试</option>
            </select>
          </div>
          <div className="title">
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="标题字数十个字以上"
            />
          </div>
          <div className="text">
            <textarea name="txt" value={txt} onChange={this.handleChange} />
          </div>
          <div className="login">
            <button onClick={this.postNew}>提交</button>
          </div>
        </div>
      </PostArticle>
    );
  }
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  postNew = () => {
    const { option, txt, title } = this.state;

    axios
      .post("https://cnodejs.org/api/v1/topics", {
        accesstoken: "cce1fdc4-7f46-4ffa-b0ae-0f405488f548",
        title: title,
        tab: option,
        content: txt
      })
      .then(res => {
        this.setState({
          option: "",
          txt: "",
          title: ""
        });
        alert("发布成功！");
      });
  };
}

export default Post;
const PostArticle = styled.div`
  border-radius: 3px;
  background-color: #fff;
  .mainPart {
    padding: 10px;
    input {
      border: 1px solid #eee;
      border-radius: 3px;
      width: 100%;
      height: 30px;
    }
    textarea {
      width: 100%;
      height: 200px;
      border: none;
      resize: none;
      outline: none;
      padding-top: 20px;
    }
    button {
      background-color: #08c;
      border-radius: 3px;
      border: none;
      outline: none;
      padding: 3px 10px;
      color: #fff;
    }
  }
  h2 {
    a {
      color: #80bd01;
    }
    color: #999;
    line-height: 20px;
    padding: 10px;
    font-size: 14px;
    font-weight: normal;
    border-bottom: 1px solid #e5e5e5;
    background: #f6f6f6;
  }
  select {
    width: 220px;
    height: 30px;
    background: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
  }
`;
