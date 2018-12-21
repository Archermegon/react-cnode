import React, { Component } from "react";
import { Pagination, Skeleton } from "antd";
import axios from "axios";
import styled from "styled-components";
import { URL } from "./../../static/url";

class Same extends Component {
  state = {
    currentPage: 1,
    total: [3330, 530, 1364, 1980, 479],
    topics: []
  };
  componentDidMount() {
    const { currentPage } = this.state;
    this.getAxios(currentPage);
  }
  render() {
    const { total, topics } = this.state;
    const { ind } = this.props;
    const liList = topics.map(ele => (
      <Cell className="ele" key={ele.id}>
        <div className="sculp">
          <img src={ele.author.avatar_url} alt="" />
        </div>
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
          <Span
            style={{
              backgroundColor: "#e5e5e5",
              color: "#999"
            }}
          >
            问答
          </Span>
        )}
        {ele.title}
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
            total={total[ind]}
            pageSize={40}
            defaultCurrent={1}
            onChange={this.getAxios}
          />
        </PageControll>
      </div>
    );
  }
  getAxios = page => {
    const { path } = this.props;
    console.log(page);
    axios.get(`${URL}/topics?tab=${path}&&page=${page}`).then(res => {
      console.log(res.data.data);
      this.setState({
        topics: res.data.data,
        currentPage: page
      });
    });
  };
}

export default Same;
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
