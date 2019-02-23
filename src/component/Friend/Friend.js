import React, { Component } from "react";

class Friend extends Component {
  render() {
    const part4 = (
      <div className="top friend">
        <h2>友情社区</h2>
        <div className="bottom">
          <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
            <div className="img">
              <img
                src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://render.alipay.com/p/s/taobaonpm_click/image_click_25">
            <div className="img">
              <img
                src="https://static2.cnodejs.org/public/images/golangtc-logo.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://0x7.me/UDyj">
            <div className="img">
              <img
                src="https://static2.cnodejs.org/public/images/phphub-logo.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    );
    return <div>{part4}</div>;
  }
}

export default Friend;
