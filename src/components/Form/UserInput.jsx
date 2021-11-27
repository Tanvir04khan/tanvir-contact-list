import { ErrorMessage, useField } from "formik";
import React from "react";
import { Div } from "./UsreInput.styled";

const UserInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Div className="input">
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
      <p>
        <ErrorMessage name={field.name} />
      </p>
    </Div>
  );
};

export default UserInput;
