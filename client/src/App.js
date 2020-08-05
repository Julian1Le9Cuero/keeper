import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
