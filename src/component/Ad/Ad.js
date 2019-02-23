import React, { Component } from "react";

class Ad extends Component {
  render() {
    const part2 = (
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
    );
    return <div>{part2}</div>;
  }
}

export default Ad;
