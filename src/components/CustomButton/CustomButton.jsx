import React from "react";

import "./CustomButton.scss";
import { is } from "@babel/types";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
