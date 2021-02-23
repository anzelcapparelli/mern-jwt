import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";
import App from "./App";
import AuthService from "./util/AuthService";
import reportWebVitals from "./reportWebVitals";

const auth = new AuthService();

// add an interceptor (kind of like middleware) that will add auth headers to
// requests
axios.interceptors.request.use(function (config) {
  // add authorization headers for requests to own api (request url starts with
  // "/api" exactly)
  const token = auth.getToken();
  if (token && /^\/api/.test(config.url)) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
