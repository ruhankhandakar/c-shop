import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";

import { auth, createUserProfileDocument } from "./firebase/util";
import { setCurrentUser } from "./redux/actions/userAction";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        // if user sign in
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(null);
      }
    });
  }
  componentWillUnmount() {
    //  close subscription
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect(null, { setCurrentUser })(App);
