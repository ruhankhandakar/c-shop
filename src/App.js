import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Fragment>
  );
};

export default App;
