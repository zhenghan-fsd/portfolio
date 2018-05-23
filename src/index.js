import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
