import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import Wow from "wowjs";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./style.css";

new Wow.WOW({
  live: false
}).init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
