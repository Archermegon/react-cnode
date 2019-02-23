import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Ad from "../Ad/Ad";
import Friend from "../Friend/Friend";

class User extends Component {
  state = {
    userInfo: null,
    user: null,
    val: ""
  };
  componentDidMount() {
    if (sessionStorage.loginame) {
      this.setState({
        userInfo: {
          name: sessionStorage.loginame,
          avatar_url: sessionStorage.avatar_url
        }
      });
    }
    axios
      .get(`https://cnodejs.org/api/v1/user/${sessionStorage.loginame}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({
          user: res.data.data
        });
      });
  }
  render() {
    const { val, user, userInfo } = this.state;
    const part1 = (
      <div className="top">
        <h2>个人信息</h2>
        {userInfo && user ? (
          <div className="info">
            <div className="sculp">
              <Link className="img" to={`/self/${user.loginname}`}>
                <img src={sessionStorage.avatar_url} alt="" />
              </Link>
              <p className="name">{user.loginname}</p>
            </div>
            <p className="score">积分：{user.score}</p>
          </div>
        ) : (
          <>
            <input type="text" value={val} onChange={this.handleChange} />
            <br />
            <button
              onClick={() => {
                this.onclick(val);
              }}
            >
              登录
            </button>
          </>
        )}
      </div>
    );
    const part2 = sessionStorage.loginame ? (
      <div className="middle">
        <Link to="/post">发布话题</Link>
      </div>
    ) : (
      ""
    );
    return (
      <Left1>
        {part1}
        {part2}
        <Ad />
        <Friend />
      </Left1>
    );
  }
  onclick = val => {
    if (val.trim()) {
      console.log(val);
      axios
        .post(`https://cnodejs.org/api/v1/accesstoken`, { accesstoken: val })
        .then(res => {
          sessionStorage.avatar_url = res.data.avatar_url;
          sessionStorage.loginame = res.data.loginname;
          // console.log(res.data);
          this.setState({
            userInfo: {
              name: sessionStorage.loginame,
              avatar_url: sessionStorage.avatar_url
            }
          });
        })
        .catch(() => {
          alert("用户不存在");
        });
    }
  };
  handleChange = event => {
    this.setState({
      val: event.target.value
    });
  };
}

export default User;
const Left1 = styled.div`
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
  .middle {
    background: #fff;
    border-radius: 2px;
    padding: 10px;
    a {
      background: #80bd01;
      border-radius: 3px;
      padding: 5px 10px;
      width: 64px;
      line-height: 28px;
      text-align: center;
      color: #fff;
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
`;
