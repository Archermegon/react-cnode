import React, { Component } from "react";
import { Skeleton } from "antd";
import axios from "axios";
import styled from "styled-components";
import { filter } from "../../static/change";
import { URL } from "./../../static/url";
import Comments from "../Comments/Comments";

class TopicContent extends Component {
  state = {
    topic: {}
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    axios.get(`${URL}/topic/${id}`).then(res => {
      console.log(res.data.data);
      this.setState({
        topic: res.data.data
      });
    });
  }

  render() {
    const { topic } = this.state;
    // console.log(topic);
    const div = topic.id ? (
      <>
        <Topic>
          <h1>{topic.title}</h1>
          <div className="title">
            <span>作者：{topic.author.loginname}</span>
            <span>来自：{filter(topic.tab)}</span>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
        </Topic>
        <Comments comments={topic.replies} addComment={this.addComment} />
      </>
    ) : (
      <Skeleton paragraph={{ rows: 5 }} />
    );
    return <div>{div}</div>;
  }
  addComment = val => {
    const { topic } = this.state;
    axios
      .post(`https://cnodejs.org/api/v1/topic/${topic.id}/replies`, {
        accesstoken: "cce1fdc4-7f46-4ffa-b0ae-0f405488f548",
        content: val
      })
      .then(res => {
        // window.location().reload();
      });
  };
}

export default TopicContent;
const Topic = styled.div`
  background: #fff;
  border-radius: 3px;
  padding: 10px;
  .content img {
    width: 100%;
  }
`;
