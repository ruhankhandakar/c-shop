import React from "react";

import { CustomButtonContainers } from "./CustomButtonStyle";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainers {...props}>{children}</CustomButtonContainers>
);

export default CustomButton;
