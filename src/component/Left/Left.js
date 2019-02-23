import React, { Component } from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import PostUser from "../PostUser/PostUser";
import User from "../User/User";

class Left extends Component {
  render() {
    const part2 = sessionStorage.loginame ? (
      <div className="middle">
        <Link to="/post">发布话题</Link>
      </div>
    ) : (
      ""
    );
    const part3 = sessionStorage.loginame ? (
      <div className="bottom">
        <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
          <div className="img">
            <img
              src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"
              alt=""
            />
          </div>
        </a>
        <a href="https://render.alipay.com/p/s/taobaonpm_click/image_click_25">
          <div className="img">
            <img
              src="https://render.alipay.com/p/s/taobaonpm_click/image_25"
              alt=""
            />
          </div>
        </a>
        <a href="https://0x7.me/UDyj">
          <div className="img">
            <img
              src="https://static.cnodejs.org/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O"
              alt=""
            />
          </div>
        </a>
        <a href="https://seeconf.antfin.com/?from=cnode">
          <div className="img">
            <img
              src="https://static.cnodejs.org/Fl_LDJY2VdTy0g060A8jm75dnufL"
              alt=""
            />
          </div>
        </a>
      </div>
    ) : (
      ""
    );
    const part4 = (
      <div className="top friend">
        <h2>友情社区</h2>
        <div className="bottom">
          <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
            <div className="img">
              <img
                src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"
                alt=""
              />
            </div>
          </a>
          <a href="https://render.alipay.com/p/s/taobaonpm_click/image_click_25">
            <div className="img">
              <img
                src="https://render.alipay.com/p/s/taobaonpm_click/image_25"
                alt=""
              />
            </div>
          </a>
          <a href="https://0x7.me/UDyj">
            <div className="img">
              <img
                src="https://static.cnodejs.org/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O"
                alt=""
              />
            </div>
          </a>
          <a href="https://seeconf.antfin.com/?from=cnode">
            <div className="img">
              <img
                src="https://static.cnodejs.org/Fl_LDJY2VdTy0g060A8jm75dnufL"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    );
    return (
      <Left1>
        <Switch>
          <Route path="/topic/:id" component={PostUseAuthor} />
          <Route path="/" component={User} />
        </Switch>
        {part2}
        {part3}
        {part4}
      </Left1>
    );
  }
}

export default Left;
const Left1 = styled.div`
  width: 300px;
  > div {
    margin-top: 10px;
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
    .sculp {
      width: 48px;
      height: 48px;
      img {
        width: 100%;
      }
    }
  }
`;
