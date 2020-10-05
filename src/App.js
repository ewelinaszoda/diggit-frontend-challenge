import React from "react";
import { Route, Switch } from "react-router-dom";
import Graphs from "./components/Graphs";
import stats from "./components/common/stats";

import Homepage from "./screens/Homepage/Homepage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
    </Switch>
  );
}

export default App;
