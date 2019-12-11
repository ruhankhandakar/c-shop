import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps} className="custom-button">
    {children}
  </button>
);

export default CustomButton;
