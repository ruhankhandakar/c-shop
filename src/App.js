import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";

import { auth, createUserProfileDocument } from "./firebase/util";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        // if user sign in
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      } else {
        // if user sign out
        this.setState({
          currentUser: null
        });
      }
    });
  }
  componentWillUnmount() {
    //  close subscription
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
