import React, {lazy,Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
const BasicContainer =lazy(()=>import( "./containers/BasicContainer"));
const EmptyContainer =lazy(()=>import( "./containers/Empty"));
const Container2 =lazy(()=>import( "./containers/Container2"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/simple-card" component={BasicContainer} />
          <Route path="/test" component={EmptyContainer} />
          <Route path="/slider" component={Container2} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
