import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BasicContainer from "./containers/BasicContainer";
import EmptyContainer from "./containers/Empty";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/simple-card" component={BasicContainer} />
        <Route path="/test" component={EmptyContainer} />
      </Switch>
    </Router>
  );
}

export default App;
