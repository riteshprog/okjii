import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";


// import './assets/scss/paper-dashboard.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './common.css'
import "bootstrap/dist/css/bootstrap.css";

import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
