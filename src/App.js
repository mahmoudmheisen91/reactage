import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BasicContainer from "./containers/BasicContainer";
import EmptyContainer from "./containers/Empty";
import Container2 from "./containers/Container2";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/simple-card" component={BasicContainer} />
        <Route path="/test" component={EmptyContainer} />
        <Route path="/slider" component={Container2} />
      </Switch>
    </Router>
  );
}

export default App;
