import React, { Component } from "react";
import { Pagination, Skeleton } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { URL } from "./../../static/url";

class Topic extends Component {
  state = {
    currentPage: 1,
    topics: []
  };
  componentDidMount() {
    const { currentPage } = this.state;
    this.getAxios(currentPage);
  }
  render() {
    const { topics } = this.state;
    const { match } = this.props;
    const path = match.path.slice(1);
    let total;
    switch (path) {
      case "":
        total = 3330;
        break;
      case "all":
        total = 3330;
        break;
      case "good":
        total = 530;
        break;
      case "share":
        total = 1364;
        break;
      case "ask":
        total = 1980;
        break;
      case "job":
        total = 479;
        break;
      default:
        break;
    }
    const liList = topics.map(ele => (
      <Cell className="ele" key={ele.id}>
        <Link className="sculp" to={`/self/${ele.author.loginname}`}>
          <img src={ele.author.avatar_url} alt="" />
        </Link>
        <p className="reply">
          <span>{ele.reply_count}</span>/<span>{ele.visit_count}</span>
        </p>
        {ele.top ? (
          <Span
            style={{
              backgroundColor: "#80bd01",
              color: "#fff"
            }}
          >
            置顶
          </Span>
        ) : (
          ""
        )}
        <span className="link">
          <Link to={`/topic/${ele.id}`}>{ele.title}</Link>
        </span>
        <span>1小时之前</span>
      </Cell>
    ));
    const content = topics.length ? (
      <ul className="content">{liList}</ul>
    ) : (
      <Skeleton paragraph={{ rows: 5 }} />
    );
    return (
      <div>
        {content}
        <PageControll>
          <Pagination
            total={total}
            pageSize={40}
            defaultCurrent={1}
            onChange={this.getAxios}
          />
        </PageControll>
      </div>
    );
  }
  getAxios = page => {
    const { match } = this.props;
    // console.log(match);
    const path = match.path.slice(1);
    // console.log(path);
    axios.get(`${URL}/topics?tab=${path}&&page=${page}`).then(res => {
      console.log(res.data.data);
      this.setState({
        topics: res.data.data,
        currentPage: page
      });
    });
  };
}

export default Topic;
const Cell = styled.li`
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  color: #222;
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
`;
const Span = styled.span`
  border-radius: 2px;
  margin: 3px;
  margin-right: 10px;
  padding: 2px 4px;
  font-size: 12px;
`;
const PageControll = styled.div`
  padding-bottom: 10px;
  padding-left: 10px;
  .ant-pagination-item-active a {
    color: rgb(128, 189, 1);
  }
  .ant-pagination-item-active {
    border-color: rgb(128, 189, 1);
  }
  .ant-pagination-item {
    margin-right: 0;
    border-radius: 0;
  }
  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
  }
  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    margin-left: 0;
    margin-right: 0;
  }
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 0;
  }
  .ant-pagination-item:focus,
  .ant-pagination-item:hover {
    bordr-color: rgb(128, 189, 1);
  }
`;
