// CHECKED 1.0
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
