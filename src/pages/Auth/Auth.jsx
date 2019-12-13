import React from "react";

import SignIn from "../../components/Signin/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
