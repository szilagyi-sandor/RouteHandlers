// CHECKED 1.0
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import AuthCP from "Modules/Auth/Context/AuthContext";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <AuthCP>
        <App />
      </AuthCP>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
