import React, { Component } from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/util";

import "./SignUp.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return alert(`Password don't match`);
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            value={displayName}
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            hFor="displayName"
            label="Your Name"
            required
          />
          <FormInput
            value={email}
            handleChange={this.handleChange}
            type="email"
            name="email"
            hFor="signup-email"
            label="Email"
            required
          />
          <FormInput
            value={password}
            handleChange={this.handleChange}
            type="password"
            name="password"
            hFor="ignup-password"
            label="Password"
            required
          />
          <FormInput
            value={confirmPassword}
            handleChange={this.handleChange}
            type="password"
            name="confirmPassword"
            hFor="ignup-confirmPassword"
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
