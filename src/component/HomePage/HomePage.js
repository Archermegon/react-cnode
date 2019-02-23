import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

class HomePage extends Component {
  state = {
    user: null,
    collect: ""
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://cnodejs.org/api/v1/user/${id}`).then(res => {
      this.setState({
        user: res.data.data
      });
    });
    axios.get(`https://cnodejs.org/api/v1/topic_collect/${id}`).then(res => {
      this.setState({
        collect: res.data.data.length
      });
    });
  }

  render() {
    const { user, collect } = this.state;
    return (
      <SelfPage>
        {user ? (
          <>
            <div className="self-info">
              <div className="sculp">
                <div className="img">
                  <img src={user.avatar_url} alt="" />
                </div>
                <p className="name">{user.loginname}</p>
              </div>
              <p>{collect}个话题收藏</p>
              <p>
                <svg
                  className="icon"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <defs>
                    <style />
                  </defs>
                  <path
                    d="M512 12.636c-282.747 0-512 229.212-512 512 0 226.222 146.698 418.14 350.126 485.827 25.58 4.73 35-11.1 35-24.638 0-12.206-.47-52.551-.696-95.314-142.438 30.966-172.503-60.416-172.503-60.416-23.286-59.166-56.852-74.915-56.852-74.915-46.45-31.785 3.502-31.13 3.502-31.13 51.404 3.604 78.479 52.756 78.479 52.756 45.67 78.275 119.767 55.645 149.012 42.558 4.588-33.096 17.859-55.685 32.502-68.465-113.725-12.943-233.267-56.852-233.267-253.03 0-55.89 20.009-101.581 52.757-137.421-5.325-12.902-22.856-64.963 4.956-135.496 0 0 43.008-13.742 140.84 52.49 40.838-11.345 84.644-17.039 128.164-17.244 43.5.205 87.327 5.878 128.246 17.245 97.73-66.253 140.657-52.49 140.657-52.49 27.873 70.532 10.342 122.593 5.038 135.495 32.83 35.86 52.695 81.53 52.695 137.42 0 196.65-119.788 239.944-233.8 252.622 18.37 15.892 34.734 47.042 34.734 94.802 0 68.505-.594 123.637-.594 140.513 0 13.619 9.216 29.593 35.165 24.576C877.486 942.612 1024 750.756 1024 524.616c0-282.788-229.233-512-512-512z"
                    fill="#8a8a8a"
                  />
                </svg>
                @{user.githubUsername}
              </p>
            </div>
            <div className="recent">
              <h2>最近创建的话题</h2>
              {user.recent_topics.map(ele => (
                <li className="cell" key={ele.id}>
                  <Link className="sculp" to={`/self/${ele.author.loginname}`}>
                    <img src={ele.author.avatar_url} alt="" />
                  </Link>
                  {ele.top ? (
                    <span
                      style={{
                        backgroundColor: "#80bd01",
                        color: "#fff"
                      }}
                    >
                      置顶
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="link">
                    <Link to={`/topic/${ele.id}`}>{ele.title}</Link>
                  </span>
                  <span>1小时之前</span>
                </li>
              ))}
            </div>
            <div className="recent">
              <h2>最近参与的话题</h2>
              {user.recent_replies.map(ele => (
                <li className="cell" key={ele.id}>
                  <Link className="sculp" to={`/self/${ele.author.loginname}`}>
                    <img src={ele.author.avatar_url} alt="" />
                  </Link>
                  {ele.top ? (
                    <span
                      style={{
                        backgroundColor: "#80bd01",
                        color: "#fff"
                      }}
                    >
                      置顶
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="link">
                    <Link to={`/topic/${ele.id}`}>{ele.title}</Link>
                  </span>
                  <span>1小时之前</span>
                </li>
              ))}
            </div>
          </>
        ) : (
          "加载中……"
        )}
      </SelfPage>
    );
  }
}

export default HomePage;
const SelfPage = styled.div`
p{
  margin:0;
  line-height:24px;
}
  .self-info {
    background: #fff;
    border-radius: 2px;
    padding: 10px;
    .sculp{
      display:flex;
      >p{
        margin-left:10px;
      }
    }
    .img{
      width:48px;
      height:48px;
      border-radius:3px;
      overflow:hidden
      img{
        width:100%;
      }
    }
  }
  .recent {
    margin-top: 10px;
    background: #fff;
    border-radius: 2px;
    padding: 10px;
    .cell{
      padding:10px;
      display: flex;
      align-items: center;
      color: #222;

          border-bottom: 1px solid #f0f0f0;
      :hover {
        background: #f5f5f5;
      }
      .sculp {
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 2px;
        margin-right: 10px;
      }
      .sculp > img {
        width: 100%;
      }
      :hover .link {
        text-decoration: underline;
      }
      .link {
        width: 600px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .link > a {
        color: #222;
      }
      .reply {
        width: 70px;
        display: flex;
        align-items: center;
        line-height: 30px;
        margin-bottom: 0;
      }
        }
`;
