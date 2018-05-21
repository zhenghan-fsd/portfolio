import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
