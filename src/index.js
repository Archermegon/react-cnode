import React from "react"; //react语法包
import ReactDOM from "react-dom"; //react

import App from "./component/App"; //默认导入
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("wrapper"));
// 通过dom渲染方法，将假的dom变成真的dom节点

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
