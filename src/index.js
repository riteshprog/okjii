import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

// import './assets/scss/paper-dashboard.scss';
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.css";

import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";


import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
