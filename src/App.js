import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BasicContainer from "./containers/BasicContainer";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/simple-card" component={BasicContainer} />
      </Switch>
    </Router>
  );
}

export default App;
