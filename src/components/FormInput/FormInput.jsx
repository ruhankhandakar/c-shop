import React from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, hFor, ...restProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      id={hFor}
      {...restProps}
    />
    {label && (
      <label
        className={`${restProps.value.length ? "shrink" : ""} form-input-label`}
        htmlFor={hFor}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
