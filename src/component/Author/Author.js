import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Ad from "../Ad/Ad";

class Author extends Component {
  state = {
    userInfo: null
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://cnodejs.org/api/v1/user/${id}`).then(res => {
      console.log(res.data.data);
      this.setState({
        userInfo: res.data.data
      });
    });
  }
  render() {
    const id = this.props.match.params.id;
    const { userInfo } = this.state;
    const part1 = userInfo ? (
      <div className="top">
        <h2>个人信息</h2>
        <div className="info">
          <div className="sculp">
            <Link className="img" to={`/self/${userInfo.loginname}`}>
              <img src={userInfo.avatar_url} alt="" />
            </Link>
            <p className="name">{userInfo.loginname}</p>
          </div>
          <p className="score">积分：{userInfo.score}</p>
        </div>
      </div>
    ) : (
      <p>加载中……</p>
    );
    const part3 = userInfo ? (
      <div className="otherTopics top">
        <h2>作者其他话题</h2>
        {userInfo.recent_topics.filter(ele => ele.id !== id).length ? (
          <ul className="otherTopic">
            {userInfo.recent_topics
              .filter(ele => ele.id !== id)
              .map(ele => (
                <li key={ele.id}>
                  <Link to={`/topic/${ele.id}`}>{ele.title}</Link>
                </li>
              ))}
          </ul>
        ) : (
          <p>暂无其他话题</p>
        )}
      </div>
    ) : (
      <p>加载中……</p>
    );
    return (
      <AuthorPart>
        {part1}
        <Ad />
        {part3}
      </AuthorPart>
    );
  }
}

export default Author;
const AuthorPart = styled.div`
  width: 300px;
  > div {
    margin-top: 10px;
  }
  .top {
    margin-top: 0;
    background: #fff;
    border-radius: 2px;
    h2 {
      line-height: 21px;
      padding: 10px;
      background: #f6f6f6;
      font-size: 14px;
    }
    input {
      margin-left: 30px;
      margin-bottom: 10px;
    }
    button {
      margin-left: 80px;
      margin-bottom: 10px;
    }
  }
  .otherTopic {
    padding: 10px;
    padding-top: 2px;
    a {
      color: #778087;
    }
  }
  .bottom {
    background: #fff;
    border-radius: 2px;
    padding: 10px;
    .img > img {
      width: 100%;
    }
    a {
      display: block;
      margin-top: 10px;
    }
  }
  .friend {
    margin-top: 10px;
  }
  .info {
    padding: 10px;
    .sculp {
      display: flex;
      .img {
        width: 48px;
        height: 48px;
        border-radius: 2px;
        overflow: hidden;
      }
      img {
        width: 100%;
      }
      .name {
        margin-left: 10px;
        font-size: 16px;
        color: #778087;
      }
    }
    .score {
      line-height: 48px;
    }
  }
  .otherTopics {
    margin-top: 10px;
  }
`;
