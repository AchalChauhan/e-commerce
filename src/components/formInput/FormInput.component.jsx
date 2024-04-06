/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./formInput.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <div className="group">
        <input {...otherProps} className="form-input" />
        {label && (
          <label
            className={`${
              otherProps.value.length ? "shrink" : "null"
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
};

export default FormInput;
