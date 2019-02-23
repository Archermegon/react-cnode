import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

class Comments extends Component {
  state = {
    val: "",
    trueId: []
  };
  render() {
    const { val, trueId } = this.state;
    const { comments, addComment } = this.props;
    const commentsContent = comments.length ? (
      <ul
        className="comments"
        style={{
          borderRadius: "3px",
          backgroundColor: "#fff",
          marginTop: "15px"
        }}
      >
        <p>{comments.length}条回复</p>
        {comments.map((ele, ind) => (
          <li key={ele.id}>
            <div className="comment-avatar">
              <div>
                <div className="img">
                  <img src={ele.author.avatar_url} alt="" />
                </div>
                <Link to={`/user/${ele.author.loginname}`} className="name">
                  {ele.author.loginname}
                </Link>
                <p className="level">{ind + 1}楼·一天前</p>
              </div>
              {sessionStorage.loginame ? (
                <div>
                  <button
                    className="up"
                    onClick={() => {
                      this.onUp(ele.id);
                    }}
                  >
                    {ele.ups.length ? (
                      <p>
                        <svg
                          className="icon icon-dianzan"
                          width="15"
                          height="15"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#515151"
                            d="M946.026 471.767c0 36.496-10.067 69.915-30.176 100.254 3.694 13.534 5.547 27.678 5.547 42.439 0 31.58-7.81 61.11-23.409 88.573 1.237 8.612 1.855 17.438 1.855 26.45 0 41.42-12.322 77.917-36.952 109.484.402 56.998-17.043 102.009-52.35 135.01-35.313 33.002-81.906 49.511-139.795 49.511H591.304c-39.416 0-78.319-4.61-116.708-13.838-38.388-9.22-82.83-22.658-133.325-40.282-47.636-16.412-75.966-24.606-84.99-24.606H78.92c-21.767 0-40.34-7.69-55.733-23.067C7.79 906.315.09 887.768.09 866.033V472.376c0-21.728 7.699-40.282 23.096-55.66 15.393-15.378 33.966-23.067 55.733-23.067h168.74c14.778-9.837 42.9-41.613 84.37-95.34 23.803-30.748 45.776-56.99 65.892-78.726 9.858-10.247 17.14-27.773 21.868-52.588 4.713-24.807 10.974-50.744 18.784-77.813 7.788-27.06 20.52-49.204 38.181-66.428C492.762 7.592 511.242 0 532.18 0c34.488 0 65.483 6.67 92.994 19.989 27.503 13.332 48.44 34.139 62.818 62.433 14.361 28.287 21.553 66.428 21.553 114.4 0 38.14-9.858 77.5-29.558 118.1h108.382c42.7 0 79.652 15.587 110.855 46.744 31.197 31.165 46.803 67.87 46.803 110.1zM146.048 854.343c7.79-7.786 11.7-17.015 11.7-27.678 0-10.655-3.908-19.883-11.7-27.677-7.807-7.786-17.043-11.69-27.716-11.69-10.681 0-19.917 3.905-27.713 11.69-7.802 7.792-11.7 17.02-11.7 27.677 0 10.663 3.898 19.892 11.7 27.678 7.796 7.793 17.032 11.69 27.713 11.69 10.673 0 19.91-3.897 27.716-11.69zM867.2 472.376c0-20.91-8.011-39.256-24.019-55.051-16.015-15.78-34.286-23.677-54.812-23.677H571.595c0-23.773 9.85-56.485 29.56-98.106 19.708-41.613 29.558-74.519 29.558-98.723 0-40.177-6.567-69.908-19.7-89.182-13.15-19.267-39.417-28.912-78.834-28.912-10.677 10.671-18.472 28.094-23.4 52.284-4.929 24.198-11.19 49.927-18.785 77.195-7.602 27.275-19.812 49.725-36.638 67.349-9.04 9.437-24.846 28.094-47.42 55.972-1.646 2.053-6.373 8.21-14.168 18.45-7.803 10.254-14.266 18.665-19.395 25.222-5.137 6.56-12.226 15.282-21.25 26.138-9.03 10.872-17.243 19.892-24.629 27.061-7.393 7.184-15.3 14.457-23.714 21.84-8.42 7.377-16.625 12.918-24.63 16.606-8.01 3.688-15.3 5.532-21.867 5.532h-19.708v393.657h19.708c5.332 0 11.801.61 19.403 1.844 7.587 1.228 14.362 2.566 20.32 3.993 5.947 1.443 13.75 3.696 23.4 6.768 9.642 3.079 16.834 5.443 21.554 7.072 4.72 1.643 12.009 4.217 21.867 7.689 9.85 3.495 15.799 5.643 17.854 6.461 86.628 29.938 156.831 44.9 210.624 44.9h74.513c78.833 0 118.241-34.237 118.241-102.716 0-10.663-1.027-22.145-3.075-34.444 12.315-6.559 22.06-17.32 29.253-32.295 7.177-14.962 10.773-30.035 10.773-45.204 0-15.17-3.693-29.313-11.087-42.446 21.757-20.495 32.641-44.9 32.641-73.194 0-10.24-2.055-21.617-6.157-34.132-4.11-12.507-9.24-22.241-15.397-29.217 13.134-.402 24.116-10.046 32.947-28.911 8.821-18.852 13.244-35.464 13.244-49.823z"
                          />
                        </svg>{" "}
                        {ele.ups.length}
                      </p>
                    ) : (
                      ""
                    )}
                  </button>
                  <button className="re">
                    <svg
                      className="icon icon-huifu"
                      width="15"
                      height="15"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#515151"
                        d="M912 620.8c0 49.4-18.9 116.5-56.8 201.3-.9 2-2.4 5.7-4.6 10.7-2.2 5-4.2 9.5-6.1 13.4-1.8 3.8-3.7 7.2-5.9 9.9-3.5 5-7.7 7.6-12.5 7.6-4.5 0-8-1.5-10.5-4.5s-3.7-6.7-3.7-11.2c0-2.7.4-6.7 1.1-11.8s1.1-8.7 1.1-10.5c1.5-20.3 2.2-38.5 2.2-54.9 0-30.1-2.6-57-7.8-80.9-5.2-23.8-12.4-44.4-21.7-61.9-9.2-17.4-21.1-32.4-35.6-45-14.5-12.7-30.3-23-47.2-31-16.8-8.1-36.7-14.3-59.4-19s-45.7-7.8-68.8-9.6c-23.1-1.8-49.2-2.7-78.3-2.7h-99.9v114.2c0 7.7-2.8 14.4-8.5 20.1-5.7 5.7-12.4 8.5-20.1 8.5s-14.4-2.8-20.1-8.5L120.5 426.6c-5.7-5.7-8.5-12.3-8.5-20.1 0-7.7 2.8-14.4 8.5-20.1L349 157.9c5.7-5.7 12.3-8.5 20.1-8.5 7.7 0 14.4 2.8 20.1 8.5 5.7 5.7 8.5 12.4 8.5 20.1v114.2h100c212.2 0 342.4 60 390.6 179.9 15.8 40 23.7 89.5 23.7 148.7z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="commentCon">
              <p dangerouslySetInnerHTML={{ __html: ele.content }} />
              {trueId.filter(e => e === ele.reply_id).length ? (
                <div>
                  <textarea value={val} onChange={this.handleChange} />
                  <button>回复</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      ""
    );
    const add = sessionStorage.loginame ? (
      <AddCom>
        <h2>添加回复</h2>
        <textarea value={val} onChange={this.handleChange} />
        <br />
        <button
          onClick={() => {
            if (val.trim()) {
              addComment(val);
            }
          }}
        >
          回复
        </button>
      </AddCom>
    ) : (
      ""
    );
    return (
      <>
        <CommentCon>{commentsContent}</CommentCon>
        {add}
      </>
    );
  }
  onUp = id => {
    axios
      .post(`https://cnodejs.org/api/v1/reply/${id}/ups`, {
        accesstoken: "cce1fdc4-7f46-4ffa-b0ae-0f405488f548"
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(res => {
        console.log(res);
      });
  };
  handleChange = event => {
    this.setState({
      val: event.target.value
    });
  };
}

export default Comments;
const CommentCon = styled.div`
  background: #fff;
  border-radius: 3px;
  margin-top: 10px;
  .comments > p {
    line-height: 21px;
    padding: 10px;
    background: #f6f6f6;
  }
  .comments > li {
    border-bottom: 1px solid #e5e5e5;
    padding: 5px;
    color: #222;
    .img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
      overflow: hidden;
      > img {
        width: 100%;
      }
    }
    .icon-dianzan {
      font-size: 12px;
    }
    .icon-huifu {
      font-size: 12px;
    }
    button {
      outline: none;
      border: none;
      background: none;
      text-align: left;
      display: flex;
      align-items: center;
      p {
        margin-bottom: 0;
      }
    }
    .level {
      margin-left: 10px;
      color: #08c;
      font-size: 13px;
    }
    .up {
      width: 35px;
      margin-right: 10px;
      cursor: pointer;
    }
    .comment-avatar {
      display: flex;
      line-height: 20px;
      justify-content: space-between;
      > div {
        display: flex;
      }
    }
    > p {
      margin-left: 45px;
      margin-top: -5px;
      font-size: 16px;
    }
    .name {
      margin-left: 10px;
      color: #666;
    }
    .commentCon {
      margin-top: -8px;
      padding-left: 40px;
      padding-right: 10px;
      textarea {
        resize: none;
        width: 100%;
      }
      button {
        background-color: #08c;
        border-radius: 3px;
        padding: 10px 15px;
        color: #fff;
      }
      p > img {
        width: 100%;
      }
    }
  }
`;
const AddCom = styled.div`
  background: #fff;
  border-radius: 3px;
  margin-top: 10px;
  h2 {
    line-height: 21px;
    padding: 10px;
    background: #f6f6f6;
    font-weight: normal;
    font-size: 14px;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 150px;
    border: none;
    outline: none;
  }
  button {
    outline: none;
    border: none;
    background: none;
    background-color: #08c;
    border-radius: 3px;
    padding: 10px 15px;
    color: #fff;
    margin: 15px;
  }
`;
