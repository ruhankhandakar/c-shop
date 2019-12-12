import React, { Component } from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/util";

import "./SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={email}
            handleChange={this.handleChange}
            type="email"
            name="email"
            hFor="email"
            label="Email"
            required
          />
          <FormInput
            value={password}
            handleChange={this.handleChange}
            type="password"
            name="password"
            hFor="password"
            label="Password"
            required
          />

          <div className="button">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
