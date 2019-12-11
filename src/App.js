import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
